import { faker } from '@faker-js/faker';

describe('Testes End To End do fluxo de cadastro e login', () => {

    })


    it('Deve cadastrar um usuário e realizar login com as mesmas credenciais', () => {
        const usuario = {
            nome: faker.person.fullName(),
            email: faker.internet.email(),
            telefone: faker.phone.number('## #####-####'),
            senha: 'TesteEBAC@123',
            confirmarSenha: 'TesteEBAC@123'
        };
        cy.preencherCadastro(
            usuario.nome,
            usuario.email,
            usuario.telefone,
            usuario.senha,
            usuario.confirmarSenha
        )
        //Resultado Esperado: Cadastro realizado com sucesso e redirecionamento para dashboard
        cy.get('.user-actions > .btn-outline-danger').click()
        //Resultado esperado: Logout realizado com sucesso e redirecionamento para login
        cy.url().should('include', 'login.html')
        cy.login(
            usuario.email,
            usuario.senha
        )
        //Resultado esperado: Login realizado com sucesso e redirecionamento para dashboard

    });
