import cookie from 'js-cookie';
import Router from 'next/router';

export const handleLogin = (token) => {
    cookie.set('token', token);
    localStorage.setItem('authToken',token)
    Router.push('/admin/dashboard');
}

export const redirectUser = (ctx, location) => {
    if(ctx.req){
        ctx.res.writeHead(302, { Location: location });
        ctx.res.end();
    } else {
        Router.push(location);
    }
}

export const handleLogout = () => {
    cookie.remove('token');
    localStorage.removeItem('authToken')
    window.localStorage.setItem('logout', Date.now());
    Router.push('/auth/login');
}