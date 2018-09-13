import { BaseContext } from 'koa';
import {
  createUser,
  updateUser,
  findUserById,
  findAll,
  delUser
} from '../service/user';
import { ok, badRequest } from './respond';

export async function get(ctx: BaseContext) {
  const { userId } = ctx.query;
  let user = null;
  if (userId) {
    user = await findUserById(userId);
  } else {
    user = await findAll();
  }
  if (user) {
    ctx.body = ok(user);
  } else {
    ctx.body = ok(null);
  }
}

export async function save(ctx: BaseContext) {
  const { body: attr } = ctx.request;
  const { userId } = attr;
  checkId(ctx, userId);
  const user = await findUserById(userId);
  if (user) {
    const user = await updateUser(userId, attr);
    ctx.body = ok(user);
  } else {
    const user = await createUser(attr);
    ctx.body = ok(user);
  }
}

export async function del(ctx: BaseContext) {
  const { userId } = ctx.query;
  checkId(ctx, userId);

  const result = await delUser(userId);
  if (result) {
    ctx.body = ok(result);
  } else {
    badRequest(ctx, 'user no found!', 404);
  }
}

function checkId(ctx: BaseContext, id: string) {
  ctx.assert(id, 400, 'userId is required.');
}
