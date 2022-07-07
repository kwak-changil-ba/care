<template> 

 <form action="" method="get" class="form-example">
  <div class="form-example">
    <label for="name">Enter your name: </label>
    <input type="text" name="name" id="name" required>
  </div>
  <div class="form-example">
    <label for="email">Enter your email: </label>
    <input type="email" name="email" id="email" required>
  </div>
  <div class="form-example">
    <label for="text">Enter your text: </label>
    <textarea rows="10 cols="60 name="text" id="text"> 入力</textarea>
  </div>
  <div class="form-example">
    <input type="submit" value="Subscribe!">
  </div>
</form>
</template>

  if (!isContact(req.body) || typeof WRITE_API_KEY === "undefined") {
    return res.status(404).end();
  }

  const content = await fetch(`https://care.microcms.io/api/v1/news`, {
    headers: { "X-WRITE-API-KEY": '21c684e8af17424d9530608ce0ded737daea' },
    body: JSON.stringify(req.body),
  })
    .then(() => "Created")
    .catch(() => null);

  // CMS側で正しく作成されたかチェック
  if (content !== "Created") {
    return res.status(401).json({ message: "Unauthorized" });
  }

  res.status(200).json({ message: "OK" });

  res.end("Contact enabled");
};