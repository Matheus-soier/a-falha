#!/bin/bash
FILES=(
  "src/pages/PoliticaDePrivacidade.tsx"
  "src/pages/Reembolsos.tsx"
  "src/pages/TermosDeUso.tsx"
  "src/pages/PoliticaDeCookies.tsx"
  "src/pages/Contato.tsx"
)

for file in "${FILES[@]}"; do
  if [ -f "$file" ]; then
    sed -i '' 's/text-brand-cyan hover:text-brand-neon transition-colors/text-brand-neon hover:text-brand-cyan transition-colors/g' "$file"
    echo "Updated $file"
  fi
done
