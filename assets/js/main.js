function criaCalculadora() {
  return {
    display: document.querySelector(".display"),

    //Função para capturar cliques
    iniciaCalculadora() {
      this.focusDisplay();
      this.cliqueBotoes();
      this.pressionaEnter();
    },

    // Deixa o display com foco
    focusDisplay() {
      this.display.focus();
    },

    //Habilita o botão Enter para realizar contas
    pressionaEnter() {
      this.display.addEventListener("keyup", (e) => {
        if (e.keyCode === 13) {
          this.botaoResultado();
        }
      });
    },

    // Criando funcionalidades para os botões
    cliqueBotoes() {
      document.addEventListener("click", (e) => {
        const el = e.target;
        // Adiciona os números no display
        if (el.classList.contains("btn-num")) {
          this.display.value += el.innerText;
        }
        // Apaga todos os números através do botão clear
        if (el.classList.contains("btn-clear")) {
          this.display.value = "";
        }
        // Apaga 1 número
        if (el.classList.contains("btn-apaga")) {
          this.display.value = this.display.value.slice(0, -1);
        }
        // Calcula o resultado das operações
        if (el.classList.contains("btn-eq")) {
          this.botaoResultado();
        }
      });      
    },

    // Função que realiza as operações
    botaoResultado() {
      let conta = this.display.value;
      try {
        conta = eval(conta);
        if (!conta) {
          alert("Conta invalida");
          return;
        }
        this.display.value = conta;
        this.focusDisplay();
      } catch (e) {
        alert("Conta invalida");
        return;
      }
    },
  };
}

const calculadora = criaCalculadora();
calculadora.iniciaCalculadora();
