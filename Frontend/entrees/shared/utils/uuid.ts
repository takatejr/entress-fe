export const REGEX_UUID = /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/;

export const generateUUID = () => crypto.randomUUID();

export const isUUID = (uuid: string) => RegExp(REGEX_UUID).test(uuid);
