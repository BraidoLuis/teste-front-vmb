# Mini E-commerce "Neoclássico"

Este é um projeto de front-end para um mini e-commerce de decoração, focado em criar uma experiência de usuário moderna, responsiva e rica em funcionalidades. O projeto foi desenvolvido de forma iterativa, evoluindo de uma estrutura simples para uma arquitetura robusta e escalável com React.

---

## ✨ Features

* **Design Responsivo (Mobile-First):** Layouts que se adaptam perfeitamente a qualquer tamanho de tela, de celulares a desktops.
* **Componentização com React:** Interface construída com componentes reutilizáveis e funcionais (`Header`, `Footer`, `ProductCard`, etc.).
* **Gerenciamento de Estado Global:** Uso da Context API do React para gerenciar o estado do carrinho de compras em toda a aplicação.
* **Carrosséis de Produtos:** Seções de produtos interativas com navegação e paginação, implementadas com Swiper.js.
* **Carrinho de Compras Funcional:**
    * Adicionar e remover itens.
    * Persistência de dados no `localStorage` (o carrinho sobrevive ao recarregamento da página).
    * Sidebar (drawer) animada para visualização do carrinho.
* **Notificações (Toasts):** Feedback moderno e não-intrusivo para o usuário com a biblioteca Sonner.
* **Lógica Abstraída (Custom Hooks):** A lógica de negócio (busca de dados e gerenciamento do carrinho) foi extraída para hooks customizados (`useProducts`, `useCart`), seguindo as melhores práticas do React.
* **Efeitos de UI Modernos:** Hover effects sutis para melhorar o feedback visual e a interatividade.

---

## 🛠️ Tecnologias Utilizadas

* **React 18** (com Vite)
* **Tailwind CSS** para estilização utilitária
* **Swiper.js** para carrosséis
* **Sonner** para notificações (toasts)
* **React Icons** para iconografia
* **Git & GitHub** para versionamento de código

---

## 🚀 Como Rodar o Projeto Localmente

Para baixar e executar o projeto no seu computador, você precisará ter o [Git](https://git-scm.com/) e o [Node.js](https://nodejs.org/en/) (versão 18 ou superior) instalados.

Depois, siga estes passos no seu terminal:

**1. Clone, instale e rode o projeto com os seguintes comandos:**
```bash
# Clone o repositório para a sua máquina
git clone https://github.com/BraidoLuis/teste-front-vmb.git

# Navegue para a pasta recém-criada
cd teste-front-vmb

# Instale todas as dependências do projeto
npm install

# Inicie o servidor de desenvolvimento
npm run dev