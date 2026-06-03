# 短网址方案

## 现阶段可以直接做到

把站点放到仓库根目录后，当前 GitHub Pages 地址会从：

`https://best-allen.github.io/Piggyduck/profile/`

缩短为：

`https://best-allen.github.io/Piggyduck/`

这一步不需要买域名。

## 如果只想去掉 `/Piggyduck/`

把仓库改成用户主页仓库：

`best-allen.github.io`

然后把本网站放在这个仓库根目录，地址会变成：

`https://best-allen.github.io/`

缺点是仍然带有 GitHub 用户名，而且这个用户主页仓库通常只能作为一个主站使用。

## 如果想要最好记的地址

需要购买并绑定自定义域名，例如：

- `pigducker.com`
- `yaya.trade`
- `duckinvest.com`
- `piggyduck.io`

这些只是命名方向，购买前需要确认域名是否可注册。

## GitHub Pages 绑定自定义域名步骤

1. 在域名服务商购买域名。
2. 在仓库根目录新增一个名为 `CNAME` 的文件，内容只写你的域名，例如：

   `pigducker.com`

3. 在 GitHub 仓库里打开 `Settings` -> `Pages` -> `Custom domain`，填入同一个域名并保存。
4. 在域名 DNS 里添加 GitHub Pages 需要的记录。

   如果使用根域名，如 `pigducker.com`，添加以下 A 记录：

   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`

   如果使用子域名，如 `www.pigducker.com`，添加 CNAME 指向：

   `best-allen.github.io`

5. 等 DNS 生效后，在 GitHub Pages 勾选 `Enforce HTTPS`。

注意：CNAME 目标只写 `best-allen.github.io`，不要写 `best-allen.github.io/Piggyduck`。

## 推荐路径

先上线 `https://best-allen.github.io/Piggyduck/`，确认页面和收款入口都正常；然后再挑域名做自定义绑定。
