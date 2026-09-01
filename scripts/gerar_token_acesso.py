#!/usr/bin/env python3
"""
Gera um novo token de acesso para o app, válido por 2 dias a partir da
geração. Sobrescreve `token-acesso.txt` (raiz do repositório, texto puro,
mantido manualmente) e `frontend/public/data/acesso.json` (consumido pela
tela de login do app Angular).

Uso:
    python3 scripts/gerar_token_acesso.py

Depois de rodar, é preciso publicar (scripts/publish-site.sh) e commitar +
dar push para o token novo valer no site publicado.
"""
import json
import secrets
import string
import sys
from datetime import datetime, timedelta, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
TOKEN_FILE = ROOT / "token-acesso.txt"
ACESSO_JSON = ROOT / "frontend" / "public" / "data" / "acesso.json"
VALIDADE = timedelta(days=2)
TAMANHO_TOKEN = 32


def gerar_token(tamanho: int = TAMANHO_TOKEN) -> str:
    alfabeto = string.ascii_letters + string.digits
    return "".join(secrets.choice(alfabeto) for _ in range(tamanho))


def main() -> None:
    token = gerar_token()
    agora = datetime.now(timezone.utc)
    expira = agora + VALIDADE

    TOKEN_FILE.write_text(token + "\n", encoding="utf-8")

    ACESSO_JSON.parent.mkdir(parents=True, exist_ok=True)
    ACESSO_JSON.write_text(
        json.dumps(
            {
                "token": token,
                "geradoEm": agora.isoformat(),
                "expiraEm": expira.isoformat(),
            },
            indent=2,
            ensure_ascii=False,
        )
        + "\n",
        encoding="utf-8",
    )

    print(f"Novo token gerado: {token}", file=sys.stderr)
    print(f"Válido até: {expira.isoformat()}", file=sys.stderr)
    print(
        "Lembre-se de rodar scripts/publish-site.sh e depois commitar + dar push "
        "para o token novo valer no site publicado.",
        file=sys.stderr,
    )


if __name__ == "__main__":
    main()
