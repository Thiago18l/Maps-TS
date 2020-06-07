import faker from 'faker'

export class Company {
    protected companyName: string;
    protected catchPhrase: string;
    protected location: {
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
}