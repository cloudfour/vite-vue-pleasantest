import { withBrowser } from "pleasantest";

test(
  "Hello World renders",
  withBrowser(async ({ utils, screen, user }) => {
    await utils.injectHTML('<div id="app"></div>');
    await utils.runJS(`
	    import { createApp } from 'vue'
	    import HelloWorld from './HelloWorld.vue'
	    const app = createApp(HelloWorld)
	    app.mount('#app')
	  `);
    const buttonEl = await screen.getByRole("button", { name: /count/i });
    await expect(buttonEl).toHaveTextContent(/count is: 0/i);
    await user.click(buttonEl);
    await user.click(buttonEl);
    await user.click(buttonEl);
    await expect(buttonEl).toHaveTextContent(/count is: 3/i);
  })
);
