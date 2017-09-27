import { Injectable } from '@angular/core';

@Injectable()
export class ConfigurationProvider {
    get host(): string {
        return 'localhost';
    }

    get port(): number {
        return 7176;
    }

    get username(): string {
        return 'multichainrpc';
    }

    get password(): string {
        return 'multichainrpc';
    }
}
