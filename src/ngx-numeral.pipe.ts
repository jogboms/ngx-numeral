import { Pipe, PipeTransform, Inject, InjectionToken } from "@angular/core";
import { Numeral, RegisterType, RoundingFunction, NumeralJSLocale, NumeralJsFormat } from "./numeraljs";
import * as numeral from "numeral";

export const DEFAULT_NUMERAL = new InjectionToken<number>("DEFAULT_NUMERAL");

@Pipe({ name: "numeral" })
export class NumeralPipe implements PipeTransform {
    private numeral: Numeral;

    constructor( @Inject(DEFAULT_NUMERAL) value?: string | number) {
        this.numeral = numeral(value);
    }

    transform(value: number, format: string): string {
        return numeral(value).format(format);
    }

    get version(): string {
        return this.numeral.version;
    }

    get isNumeral(): boolean {
        return this.numeral.isNumeral;
    }

    locale(key?: string): string {
        return this.numeral.locale(key);
    }

    register(what: RegisterType, key: string, value: NumeralJSLocale | NumeralJsFormat): NumeralJSLocale | NumeralJsFormat {
        return this.numeral.register(what, key, value);
    }

    zeroFormat(format: string): void {
        return this.numeral.zeroFormat(format);
    }

    nullFormat(format: string): void {
        return this.numeral.nullFormat(format);
    }

    defaultFormat(format: string): void {
        return this.numeral.defaultFormat(format);
    }

    clone(): NumeralPipe {
        return new NumeralPipe(this.numeral.clone().value());
    }

    format(inputString?: string, roundingFunction?: RoundingFunction): string {
        return this.numeral.format(inputString, roundingFunction);
    }

    formatCurrency(inputString?: string): string {
        return this.numeral.formatCurrency(inputString);
    }

    unformat(inputString: string): number {
        return this.numeral.unformat(inputString);
    }

    value(): number {
        return this.numeral.value();
    }

    valueOf(): number {
        return this.numeral.valueOf();
    }

    set(value: any): this {
        this.numeral.set(value);
        return this;
    }

    add(value: any): this {
        this.numeral.add(value);
        return this;
    }

    subtract(value: any): this {
        this.numeral.subtract(value);
        return this;
    }

    multiply(value: any): this {
        this.numeral.multiply(value);
        return this;
    }

    divide(value: any): this {
        this.numeral.divide(value);
        return this;
    }

    difference(value: any): number {
        return this.numeral.difference(value);
    }

    validate(value: any, culture: any): boolean {
        return this.numeral.validate(value, culture);
    }
}
