interface OSFT_Config {
    apiKey : string
    refreshInterval: number
    saveLocal: boolean
    sendMetrics? : boolean
}

class Client {
    private apiKey: string
    private refreshInterval: number
    private saveLocal: boolean
    private sendMetrics : boolean

    constructor (config: OSFT_Config) {
        this.apiKey = config.apiKey
        this.refreshInterval = config.refreshInterval
        this.saveLocal = config.saveLocal
        this.sendMetrics = config.sendMetrics === undefined ? false : config.sendMetrics 
    }

    printArguments () : void {
        console.log(
            this.apiKey, 
            this.refreshInterval, 
            this.saveLocal, 
            this.sendMetrics
        )
    }    
}

let initialize = new Client({
    apiKey: '2308940293490', 
    refreshInterval: 1000, 
    saveLocal: false, 
    sendMetrics: true, 
})

let initialize2 = new Client({
    apiKey: '2308940293490', 
    refreshInterval: 1000, 
    saveLocal: false, 
})

initialize.printArguments()
initialize2.printArguments()