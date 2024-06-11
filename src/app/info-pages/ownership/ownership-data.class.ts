export class OwnershipData {
    constructor() { }

    public data: {
        label: string,
        value: number,
        layer: number,
    }[] = [
            {
                label: 'Held by registered holders at Computershare',
                value: 75500000,
                layer: 0,
            },
            {
                label: 'Held by Cede & Co on behalf of DTCC',
                value: 275600000,
                layer: 0,
            },
            {
                label: 'DRS',
                value: 62200000,
                layer: 1,
            },
            {
                label: 'DSPP',
                value: 13300000,
                layer: 1,
            },
            {
                label: 'Insiders',
                value: 39000000,
                layer: 1,
            },
            {
                label: 'Institutions',
                value: 89000000,
                layer: 1,
            },
            {
                label: 'Remainder',
                value: 147700000,
                layer: 1,
            },
        ];
}
