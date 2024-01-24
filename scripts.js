const botaoConverter = document.querySelector('.botao-converter')
const converterDe = document.querySelector('.converter-de')
const converterPara = document.querySelector('.converter-para')

async function converterValores() {
    const valorConversao = document.querySelector('.valor-conversao').value
    const valorConverter = document.querySelector('.valor-converter')
    const valorConvertido = document.querySelector('.valor-convertido')

    const dateReal = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL').then(response => response.json())

    const dateDolar = await fetch('https://economia.awesomeapi.com.br/last/BRL-USD,EUR-USD').then(response => response.json())

    const dateEuro = await fetch('https://economia.awesomeapi.com.br/last/BRL-EUR,USD-EUR').then(response => response.json())

    const realDolar = dateReal.USDBRL.high
    const realEuro = dateReal.EURBRL.high
    
    const dolarReal = dateDolar.BRLUSD.high
    const dolarEuro = dateDolar.EURUSD.high

    const euroReal = dateEuro.BRLEUR.high
    const euroDolar = dateEuro.USDEUR.high

    if(converterDe.value == 'real-de') {
        valorConverter.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(valorConversao)
    }

    if(converterDe.value == 'dolar-de') {
        valorConverter.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(valorConversao)
    }

    if(converterDe.value == 'euro-de') {
        valorConverter.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(valorConversao)
    }

    // CONVERTENDO REAL em OUTRAS MOEDAS
    if(converterPara.value == 'real-para') {
        valorConvertido.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(valorConversao)
    }

    if(converterPara.value == 'dolar-para') {
        valorConvertido.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(valorConversao / realDolar)
    }

    if(converterPara.value == 'euro-para') {
        valorConvertido.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(valorConversao / realEuro)
    }

    // CONVERTENDO DÓLAR em OUTRAS MOEDAS
    if(converterDe.value == 'dolar-de' && converterPara.value == 'dolar-para') {
        valorConvertido.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(valorConversao)
    }

    if(converterDe.value == 'dolar-de' && converterPara.value == 'real-para') {
        valorConvertido.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(valorConversao / dolarReal)
    }

    if(converterDe.value == 'dolar-de' && converterPara.value == 'euro-para') {
        valorConvertido.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(valorConversao / dolarEuro)
    }

    // CONVERTENDO EURO em OUTRAS MOEDAS
    if(converterDe.value == 'euro-de' && converterPara.value == 'euro-para') {
        valorConvertido.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(valorConversao)
    }    

    if(converterDe.value == 'euro-de' && converterPara.value == 'real-para') {
        valorConvertido.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(valorConversao / euroReal)
    }

    if(converterDe.value == 'euro-de' && converterPara.value == 'dolar-para') {
        valorConvertido.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(valorConversao / euroDolar)
    }
}

function trocarMoeda() {
    const trocarNomeDe = document.querySelector('.moeda-de')
    const trocarNomePara = document.querySelector('.moeda-para')
    const logoMoedaDe = document.querySelector('.logo-moeda-de')
    const logoMoedaPara = document.querySelector('.logo-moeda-para')

    if(converterDe.value == 'real-de') {
        trocarNomeDe.innerHTML = 'Real'
        logoMoedaDe.src = './assets/real.png'
    }

    if(converterDe.value == 'dolar-de') {
        trocarNomeDe.innerHTML = 'Dólar Americano'
        logoMoedaDe.src = './assets/dolar.png'
    }

    if(converterDe.value == 'euro-de') {
        trocarNomeDe.innerHTML = 'Euro'
        logoMoedaDe.src = './assets/euro.png'
    }

    if(converterPara.value == 'real-para') {
        trocarNomePara.innerHTML = 'Real'
        logoMoedaPara.src = './assets/real.png'
    }

    if(converterPara.value == 'dolar-para') {
        trocarNomePara.innerHTML = 'Dólar Americano'
        logoMoedaPara.src = './assets/dolar.png'
    }

    if(converterPara.value == 'euro-para') {
        trocarNomePara.innerHTML = 'Euro'
        logoMoedaPara.src = './assets/euro.png'
    }

    converterValores()
}

converterDe.addEventListener('change', trocarMoeda)
converterPara.addEventListener('change', trocarMoeda)
botaoConverter.addEventListener('click', converterValores)