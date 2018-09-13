import { getConnection, Repository } from 'typeorm';
import { validate, ValidationError } from 'class-validator';
import { User } from '../entity/game/user';

export function getRepo() {
  return getConnection('game').getRepository(User);
}

export async function createUser(attr) {
  const repo: Repository<User> = getRepo();
  const user = repo.create(attr);

  const errors: ValidationError[] = await validate(user);
  if (errors.length > 0) {
    throw errors;
  }

  return repo.save(user);
}

export function findUser(attr) {
  const repo: Repository<User> = getRepo();
  return repo.findOne(attr);
}

export async function findAll() {
  const repo: Repository<User> = getRepo();
  return repo.find();
}

export function findUserById(userId) {
  return findUser({ userId });
}

export async function updateUser(id: string, attr) {
  const repo: Repository<User> = getRepo();
  const user = await findUserById(id);

  for (let key in attr) {
    user[key] = attr[key];
  }
  await repo.save(user);
  return user;
}

export async function delUser(id: string) {
  const repo: Repository<User> = getRepo();
  const user = await findUserById(id);
  await repo.remove(user);
  return user;
}
