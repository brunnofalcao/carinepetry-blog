# 🏥 Blog Dra. Carine Petry - CMS Completo

Sistema de gerenciamento de conteúdo (CMS) profissional para o blog da Dra. Carine Petry, especialista em Investigação Clínica de Alta Complexidade.

## 🚀 Stack

- **Frontend:** HTML5 + CSS3 + JavaScript Vanilla
- **Persistência:** LocalStorage
- **Deploy:** Vercel
- **Repositório:** GitHub
- **Design:** 100% alinhado ao Brandbook oficial

## 📦 Estrutura do Projeto

```
blog-carinepetry/
├── index.html              # Website institucional
├── blog.html               # Blog público com artigos
├── brandbook.html          # Brandbook interativo
├── admin/                  # Sistema administrativo
│   ├── index.html          # Login
│   ├── dashboard.html      # Painel de controle
│   ├── editor.html         # Editor de posts
│   └── posts.html          # Gerenciamento de posts
├── vercel.json             # Configuração Vercel
└── README.md               # Este arquivo
```

## 🎨 Identidade Visual

**Cores:**
- Borgonha: `#4A1942`
- Magenta: `#9D174D`
- Creme: `#FFF9FB`

**Tipografia:**
- Display: Cormorant Garamond
- Texto: Inter

## ✨ Funcionalidades

### Website Institucional
- Hero com estatísticas
- Seção Sobre Dra. Carine
- Áreas de atuação (SAM, SED, Covid Longa)
- Processo de trabalho
- Manifesto "Você Não É Frescura"
- Formulário de contato

### Blog Público
- Grid de artigos
- Sistema de categorias
- Busca em tempo real
- Post destacado
- Sidebar com navegação
- 100% responsivo

### CMS Administrativo
- ✅ Sistema de autenticação
- ✅ Dashboard com estatísticas
- ✅ Editor WYSIWYG profissional
- ✅ Gerenciamento de posts
- ✅ Upload de imagens
- ✅ SEO otimizado com preview Google
- ✅ Tags dinâmicas
- ✅ Filtros e busca
- ✅ Ranking por visualizações
- ✅ Preparado para integração com IA

## 🔐 Acesso Administrativo

**URL:** https://blog-carinepetry.vercel.app/admin/

**Senha padrão:** (definida no arquivo `admin/index.html`)

⚠️ **IMPORTANTE:** Trocar senha antes do deploy em produção!

## 📊 Categorias do Blog

1. **SAM** - Síndrome da Ativação Mastocitária
2. **SED** - Síndrome de Ehlers-Danlos
3. **Covid Longa** - Sequelas pós-COVID
4. **Medicina do Sono**
5. **Casos Clínicos**
6. **Investigação Diagnóstica**

## 🛠️ Como Usar Localmente

### 1. Clonar repositório:
```bash
git clone https://github.com/SEU_USUARIO/blog-carinepetry.git
cd blog-carinepetry
```

### 2. Iniciar servidor local:

**Opção A - Python:**
```bash
python3 -m http.server 8000
```

**Opção B - Node.js:**
```bash
npx http-server
```

**Opção C - VS Code:**
- Instalar extensão "Live Server"
- Clicar com botão direito em `index.html`
- "Open with Live Server"

### 3. Acessar:
- Website: `http://localhost:8000/`
- Admin: `http://localhost:8000/admin/`

## 🚀 Deploy

O projeto está configurado para deploy automático no Vercel:

1. Push para o repositório GitHub
2. Vercel detecta alterações
3. Build e deploy automáticos
4. ✅ Site atualizado!

## 📝 Workflow de Conteúdo

### Criar novo post:

1. Login no admin
2. Dashboard → "Novo Post"
3. Escrever título e conteúdo
4. Selecionar categoria
5. Adicionar tags
6. Upload imagem (recomendado: 1024x630px)
7. Preencher SEO (meta description, keyword)
8. Publicar ou Salvar como Rascunho

### Gerenciar posts:

1. Admin → "Todos Posts"
2. Buscar/Filtrar
3. Editar/Visualizar/Excluir
4. Ver ranking por visualizações

## 💾 Backup

**LocalStorage** armazena os dados no navegador.

**Backup manual:**
```javascript
// Console do navegador (F12)
copy(localStorage.getItem('blogPosts'))
// Colar em arquivo JSON e guardar
```

**Frequência recomendada:** Semanal

## 🔮 Roadmap

- [ ] Integração com Claude API (geração de conteúdo com IA)
- [ ] Backend com banco de dados
- [ ] Sistema de comentários
- [ ] Analytics avançado
- [ ] Newsletter integrada
- [ ] Múltiplos usuários
- [ ] Versionamento de posts
- [ ] Agenda de publicações

## 📄 Licença

Projeto proprietário - Dra. Carine Petry

---

## 🏥 Sobre Dra. Carine Petry

**CRM-DF:** 15342  
**RQE:** 16243 (Clínica Médica) | 12865 (Medicina do Sono)

**Especialidades:**
- Síndrome da Ativação Mastocitária (SAM)
- Síndrome de Ehlers-Danlos (SED)  
- Covid Longa
- Medicina do Sono

**Endereço:**  
Centro Médico Lucio Costa  
Bloco I/T-56, SGAS 610/611  
Brasília-DF, 70200-700

**Contato:**  
📞 (61) 3263-7721  
📱 (61) 99272-1947  
✉️ contato@carinepetry.com.br

---

**Desenvolvido com ❤️ para profissionais de saúde que cuidam de casos complexos**
