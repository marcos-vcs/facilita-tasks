<script>
import BotaoComponent from '@/components/botoes/BotaoComponent.vue'
import CampoComponent from '@/components/formularios/CampoComponent.vue'

export default {
    name: 'LoginView',
    components: {
        BotaoComponent,
        CampoComponent
    },
    methods: {
        enviar() {
            this.$router.push('/home');
        }
    }
}
</script>

<template>
    <div class="container">
        <header class="cabecalho">
            <!-- logo da aplicação -->
            <img src="/images/logo.png" alt="Imagem com a logo da Facilita Tasks." />
        </header>
        <main class="conteudo_principal">
            <!-- formulário -->
            <h3 class="titulo">Entre com seus dados de acesso.</h3>
            <form class="formulario" @submit.prevent="enviar">
                <div class="campo mb-16">
                    <campo-component id="nome-ou-email" texto-label="Nome de usuário ou e-mail:"></campo-component>
                </div>
                <div class="campo">
                    <campo-component id="senha" texto-label="Senha:" tipo-campo="password"></campo-component>
                </div>
                <botao-component class="btn-submit" cor-fundo="var(--verde)">Entrar</botao-component>
            </form>
            <a class="link_esqueci_senha" href="#">Esqueci minha senha</a>
        </main>
    </div>
</template>

<style lang="stylus" scoped>
.container
    display: flex
    flex-flow: row wrap
.cabecalho
    display: flex
    align-items: center
    justify-content: center
    background-color: var(--azul-medio)
    height: 100vh
    width: 35%
.conteudo_principal
    display: flex
    flex-direction: column
    justify-content: center
    margin: auto
.campo
    display: flex
    flex-direction: column
.btn-submit
    width: 100%
    margin-top: 18px
    margin-bottom: 40px
.titulo
    margin-bottom: 36px
    font-size: 1.12rem
    font-family: 'Gilroy Bold'
    color: var(--azul-escuro)
.link_esqueci_senha
    font-size: 0.81rem
.link_esqueci_senha:focus
    border none
    outline: 2px solid var(--azul-medio)

@media screen and (max-width: 992px)
    .cabecalho
        width: 100%
        height: auto
        padding-bottom: 10px
    .container
        flex-flow: column wrap
</style>
