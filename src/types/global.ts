import type { BaseQueryApi } from "@reduxjs/toolkit/query";



export type TError = {
    data: {
        message: string;
        stack: string;
        success: boolean;
    };
    status: number;
};

export type TMeta = {
    limit: number;
    page_no: number;
    total: number;
    count: number;
};


// export type TResponse<T = unknown> = {
//     data?: { result: T } | any;
//     error?: TError;
//     success: boolean;
//     message: string;
// };

// export type TResponseRedux<T> = TResponse<T> & BaseQueryApi;

export type TQueryParam = {
    name: string;
    value: string | number | boolean | React.Key;
};


export interface  TExtraError {
    data?: {
        message?: string;
    };
}

export type TResponse<T = unknown> = {
    success: boolean;
    message: string;
    page_no: number;
    count: number;
    next: string | null;
    previous: string | null;
    results: T;  // This will contain your actual data array
};

export type TResponseRedux<T> = TResponse<T> & BaseQueryApi;