// fazer default e fazer interpretador de parametros tipo %NAME
// fazer esquema melhor para dar erro se não existir;
// fazer esquema melhor para pegar os de uma pagina;

export const dictionary = {
  resolvePath: function (object, path, defaultValue){
    try{
      const result = path.split('.').reduce((o, p) => o ? o[p] : defaultValue, object);
      if(result==null) console.log(`dictionary in ${path} returns null`);
      return result;
    } catch(err) {
      console.log(err);
    }
  },
  get: function(path) {
    return this.resolvePath(this,path,null);
  },
  alertBoxTitle:{
    us:"Alert",
    br:"Alerta"
  },
  loginErrors: {
    invalidEmail: {
      us:"Invalid E-mail",
      br:"E-mail Invalido",
    }, 
  }, 
  wrongCredentials:{
    us:"Wrong Credentials",
    br:"Credenciais inválidas",
  },
  login: {
    emailLabel: {
      us: "E-mail Address",
      br: "Endereço de e-mail",
    },
    passwordLabel : {
      us: "Password",
      br: "Senha",
    },
    confirmPasswordLabel: {
      us: "Confirm Password",
      br: "Confirmar Senha",
    },
    addProfilePicture:{
      us: "Add Profile Picture",
      br: "Adicionar Foto de Perfil"
    },
    title : {
      us: 'Sign in',
      br: "Entrar"
    },
    confirmPasswordDoesntMatch:{
      us: "Password doesn't match with confirmation",
      br: "Senha não confere com a confirmação",
    }
  },
  home:{
    login:{
      us:"Login",
      br:"Entrar",
    },
    register:{
      us:"Register",
      br:"Registrar",
    },
    dashboard:{
      us:"Dashboard",
      br:"Dashboard",
    },
    logout:{
      us:"Logout",
      br:"Sair",
    },
    greeting:{
      loggedout:{
        us:"Welcome to Habi!",
        br:"Bem vindo ao Habi!",
      },
      loggedin:{
        us:"Welcome",
        br:"Bem vindo",
      }
    }
  },
  register:
  {
    goBackToLogin: {
      us:"Go Back to login",
      br: "Voltar para o Login",
    },
    name: {
      us: "Name",
      br: "Nome",
    }
  }
}