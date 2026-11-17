# App da feira

App de celular para registrar as vendas de uma feira **sem internet**. Foi feito para a
Rede Raízes da Mata (Viçosa-MG), que vende produtos orgânicos, agroecológicos, da reforma agrária
e da agricultura familiar, e funciona junto com o programa de gestão da Rede.

Nenhum dado fica neste repositório nem vai para a internet: produtos, consumidores, saldos e vendas
ficam guardados só no aparelho de quem usa.

## Como funciona

1. **Antes da feira:** o programa de gestão gera um arquivo, o "pacote da feira", com produtos, preços,
   consumidores e saldos. Esse arquivo é enviado para o celular e carregado no app.
2. **Na feira:** o app registra as vendas, mesmo sem sinal. Dá para escolher quem compra, cadastrar
   cliente novo, mudar o preço na hora, dividir o pagamento em duas formas, desfazer e restaurar uma venda.
3. **Depois da feira:** o app exporta um arquivo com as vendas, que o programa de gestão recebe,
   confere e aplica.

## Instalar no celular (Android)

1. Com internet, abra o endereço do app no navegador (Chrome ou Firefox).
2. No menu do navegador, toque em **Instalar app** ou **Adicionar à tela inicial**.
3. Abra pelo ícone novo. A partir daí ele funciona sem internet.

O app se atualiza sozinho na próxima vez que for aberto com internet.

## Cuidados

- Os dados ficam no navegador do aparelho. Limpar os dados do navegador ou desinstalar o app apaga as
  vendas que ainda não foram exportadas. Na dúvida, exporte.
- Dois celulares na mesma feira não se enxergam: cada um exporta o seu arquivo, e o programa junta os dois.

## Arquivos

| Arquivo | Papel |
|---|---|
| `index.html` | O app inteiro: telas e regras |
| `sw.js` | Guarda o app no aparelho para funcionar sem internet |
| `manifest.webmanifest` | Nome, cores e ícone para instalar na tela inicial |
| `icone-*.png` | Ícones |

## Licença

O código é livre, sob a licença **GNU GPL versão 3** (arquivo `LICENSE`): qualquer pessoa pode usar,
estudar, copiar e modificar, e quem distribuir uma versão modificada precisa mantê-la livre, sob a
mesma licença.

O nome e o símbolo da Rede Raízes da Mata, que aparecem nos ícones, **não** fazem parte do que é
liberado: pertencem à Rede. Quem reaproveitar o app deve trocar os ícones e o nome.
