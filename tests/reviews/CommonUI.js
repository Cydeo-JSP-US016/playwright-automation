export class CommonUI {

  static async login(page) {

    let encodedCredentials = Buffer.from(
      `${process.env.SEP_USERNAME}:${process.env.SEP_PASSWORD}`,
    ).toString("base64"); // token ....

    await page.setExtraHTTPHeaders({
      Authorization: `Basic ${encodedCredentials}`,
    });

    await page.goto(process.env.SEP_QA_URL);

  }


}
