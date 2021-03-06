import faker from 'faker'

export class Company {
    protected companyName: string;
    protected catchPhrase: string;
    location: {
        lat: number;
        lng: number;
    }
    constructor () {
        this.companyName = faker.company.companyName()
        this.catchPhrase = faker.company.catchPhrase()
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }
    markerContent(): string {
        return `<h1>Company name: ${this.companyName}</h1>
                <h3>Catchphrase: ${this.catchPhrase}</h3>
        `
    }
}