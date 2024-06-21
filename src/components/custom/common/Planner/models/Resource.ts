
export type resourceType = 'room' | 'person' | 'equipment' | 'service' | 'other';

export interface Resource {
    id: string;
    name: string;
    type: resourceType;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    details: {[key:string]:any};
}