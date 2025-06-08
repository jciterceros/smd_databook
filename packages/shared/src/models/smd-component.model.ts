import { SMDComponent } from '../interfaces';

export class SMDComponentModel implements SMDComponent {
    id: string;
    code: string;
    manufacturer: string;
    type: string;
    package: string;
    description: string;
    specifications: { [key: string]: string | number };
    createdAt: Date;
    updatedAt: Date;

    constructor(data: Partial<SMDComponent>) {
        this.id = data.id || '';
        this.code = data.code || '';
        this.manufacturer = data.manufacturer || '';
        this.type = data.type || '';
        this.package = data.package || '';
        this.description = data.description || '';
        this.specifications = data.specifications || {};
        this.createdAt = data.createdAt || new Date();
        this.updatedAt = data.updatedAt || new Date();
    }

    toJSON(): SMDComponent {
        return {
            id: this.id,
            code: this.code,
            manufacturer: this.manufacturer,
            type: this.type,
            package: this.package,
            description: this.description,
            specifications: this.specifications,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        };
    }
} 