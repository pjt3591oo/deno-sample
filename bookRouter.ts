import { Router } from 'https://deno.land/x/oak/mod.ts';

const router = new Router();

const books = [{
  title: "title1",
  author: "mung1",
}, {
  title: "title1",
  author: "mung1",
}, {
  title: "title3",
  author: "mung3",
}]
router
  .get("/", (context) => {
    context.response.body = "Hello world!";
  })
  .get("/book", (context) => {
    context.response.body = Array.from(books);
  })
  .get("/book/:id", (context) => {
    const id: number = context.params.id ? parseInt(context.params.id) : 0;
    context.response.body = {
      id: context.params.id,
      book: books[id],
    };
  });

export default new Router().use('/book', router.routes(), router.allowedMethods());
