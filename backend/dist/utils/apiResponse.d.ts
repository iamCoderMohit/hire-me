import type { Response } from "express";
export declare const successResponse: (res: Response, data: {} | null, msg?: string, status?: number) => Response<any, Record<string, any>>;
export declare const errorResponse: (res: Response, msg?: string, status?: number, code?: string) => Response<any, Record<string, any>>;
//# sourceMappingURL=apiResponse.d.ts.map