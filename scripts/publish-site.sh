#!/usr/bin/env bash
# Builda o app Angular e publica o resultado como o conteúdo estático servido
# a partir da raiz do repositório (mesmo mecanismo que o Railway já usa hoje
# para servir o index.html estático).
#
# Uso: scripts/publish-site.sh
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
FRONTEND_DIR="$ROOT_DIR/frontend"
BUILD_OUTPUT_DIR="$FRONTEND_DIR/dist/frontend/browser"
MANIFEST_FILE="$ROOT_DIR/.site-manifest.txt"

echo "==> Instalando dependências e buildando o app Angular..."
(cd "$FRONTEND_DIR" && npm ci && npm run build)

if [ ! -d "$BUILD_OUTPUT_DIR" ]; then
  echo "Erro: build output não encontrado em $BUILD_OUTPUT_DIR" >&2
  exit 1
fi

echo "==> Removendo arquivos da publicação anterior (se houver)..."
if [ -f "$MANIFEST_FILE" ]; then
  while IFS= read -r rel_path; do
    [ -z "$rel_path" ] && continue
    target="$ROOT_DIR/$rel_path"
    [ -f "$target" ] && rm -f "$target"
  done < "$MANIFEST_FILE"

  # Remove diretórios que ficaram vazios depois da limpeza acima (ex.: data/)
  while IFS= read -r rel_path; do
    [ -z "$rel_path" ] && continue
    dir="$(dirname "$ROOT_DIR/$rel_path")"
    if [ -d "$dir" ] && [ "$dir" != "$ROOT_DIR" ]; then
      rmdir "$dir" 2>/dev/null || true
    fi
  done < "$MANIFEST_FILE"
fi

echo "==> Copiando o novo build para a raiz do repositório..."
NEW_MANIFEST_TMP="$(mktemp)"
(cd "$BUILD_OUTPUT_DIR" && find . -type f | sed 's|^\./||') | sort > "$NEW_MANIFEST_TMP"

while IFS= read -r rel_path; do
  [ -z "$rel_path" ] && continue
  src="$BUILD_OUTPUT_DIR/$rel_path"
  dest="$ROOT_DIR/$rel_path"
  mkdir -p "$(dirname "$dest")"
  cp "$src" "$dest"
done < "$NEW_MANIFEST_TMP"

mv "$NEW_MANIFEST_TMP" "$MANIFEST_FILE"

echo "==> Publicação concluída. Arquivos publicados (ver $MANIFEST_FILE):"
cat "$MANIFEST_FILE"
