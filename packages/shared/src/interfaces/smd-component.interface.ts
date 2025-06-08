export interface SMDComponent {
    id: string;
    code: string;
    manufacturer: string;
    type: string;
    package: string;
    description: string;
    specifications: {
        [key: string]: string | number;
    };
    createdAt: Date;
    updatedAt: Date;
} 