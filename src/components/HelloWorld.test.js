import { withBrowser } from "pleasantest";

test(
  "Hello World renders",
  withBrowser(async ({ utils, screen, user }) => {
    await utils.runJS(`
      import { render } from '../test-utils'
      import HelloWorld from './HelloWorld.vue'
      render(HelloWorld)
	  `);
    const buttonEl = await screen.getByRole("button", { name: /count/i });
    await expect(buttonEl).toHaveTextContent(/count is: 0/i);
    await user.click(buttonEl);
    await user.click(buttonEl);
    await user.click(buttonEl);
    await expect(buttonEl).toHaveTextContent(/count is: 3/i);
  })
);
