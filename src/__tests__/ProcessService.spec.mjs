import { describe, test, expect } from '@jest/global';
import processRepository from '../../repositories/processRepository.mjs';
import MinioService from '../MinioService.mjs';

const suma = (a, b) => a + b;

describe('Test suma', () => {
    test("suma 1 + 2 = 3", () => {
        expect(suma(1, 2)).toBe(3);
    });

    test("suma 1 + 3 = 4", () => {
        expect(suma(1, 3)).toBe(4);
    });
});

describe("processService test", () => {
    const processRepository = new processRepository();
    const minioService = new minioService();

    const processService = new processService({minioService, processRepository});
});