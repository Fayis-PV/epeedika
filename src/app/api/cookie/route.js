import { parse } from 'cookie';

import {NextResponse} from 'next/server'
export const GET = async (request)=>{
    const cookies = parse(request.headers.cookie || '');
    const myCookieValue = cookies.csrfToken;
    return new NextResponse(JSON.stringify(myCookieValue),{status:200})
}