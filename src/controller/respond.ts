import { BaseContext } from 'koa';

interface Respond {
  status: 'ok' | 'error';
  data: any;
  message?: string;
}

export function ok(data): Respond {
  return {
    status: 'ok',
    data
  };
}

export function error(msg: string): Respond {
  const message = msg || '';
  return {
    status: 'error',
    data: null,
    message
  };
}

export function badRequest(ctx: BaseContext, message: string, status?: number) {
  ctx.status = status || 400;
  ctx.body = error(message);
}