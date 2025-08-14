import{_ as s,c as a,o as p,aN as e}from"./chunks/framework.A-MC8nKA.js";const m=JSON.parse('{"title":"动态规划","description":"","frontmatter":{},"headers":[],"relativePath":"other/algorithm/动态规划.md","filePath":"other/algorithm/动态规划.md","lastUpdated":1752827268000}'),l={name:"other/algorithm/动态规划.md"};function i(r,n,c,t,b,u){return p(),a("div",null,n[0]||(n[0]=[e(`<h1 id="动态规划" tabindex="-1">动态规划 <a class="header-anchor" href="#动态规划" aria-label="Permalink to &quot;动态规划&quot;">​</a></h1><h2 id="动态规划重要特性" tabindex="-1">动态规划重要特性 <a class="header-anchor" href="#动态规划重要特性" aria-label="Permalink to &quot;动态规划重要特性&quot;">​</a></h2><p>动态规划的核心问题是穷举，因为要求最值，要把所有可行答案找出来，找最值。但是穷举的过程中，会存在【重叠子问题】。</p><h3 id="重叠子问题" tabindex="-1">重叠子问题 <a class="header-anchor" href="#重叠子问题" aria-label="Permalink to &quot;重叠子问题&quot;">​</a></h3><p>在求解的过程中，存在重复的子问题，若是重复解决这些子问题，存在效率低下的问题。</p><p>而解决重叠子问题，可以使用【备忘录】<strong>或者</strong>【DP table】方法来解决。</p><ul><li><p>备忘录</p><p>备忘录的思想就是将已经解决的子问题结果记录在备忘录中（可以是数组等数据结构）。</p></li></ul><blockquote><p>比如将子问题计算结果存到备忘录（数组），计算下个子问题时，先判断备忘录中是否存在计算结果。</p></blockquote><ul><li><p>DP table</p><p>使用 DP table 保存每个子问题的结果，自下向上推算结果。</p></li></ul><p><em>斐波那契数列的解决过程体现了重叠子问题的解决思路，可以参考斐波那契数列的实现思路。</em></p><h3 id="最优子结构" tabindex="-1">最优子结构 <a class="header-anchor" href="#最优子结构" aria-label="Permalink to &quot;最优子结构&quot;">​</a></h3><p>把原问题分解成若干个规模更小的<strong>子问题。</strong></p><ul><li>子问题独立。</li><li>原问题可以组合子问题的最优解。</li></ul><h2 id="重叠子问题-斐波那契数列" tabindex="-1">重叠子问题-斐波那契数列 <a class="header-anchor" href="#重叠子问题-斐波那契数列" aria-label="Permalink to &quot;重叠子问题-斐波那契数列&quot;">​</a></h2><p>斐波那契数列中，体现了重叠子问题的特性。</p><blockquote><p>斐波那契数 （通常用 F(n) 表示）形成的序列称为 斐波那契数列 。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。</p></blockquote><p><a href="https://leetcode-cn.com/problems/fibonacci-number/submissions/" target="_blank" rel="noreferrer">leetcode-509-斐波那契数</a></p><p><a href="https://labuladong.gitee.io/algo/1/3/" target="_blank" rel="noreferrer">labuladong-动态规划</a></p><hr><h3 id="_1-暴力递归" tabindex="-1">1. 暴力递归 <a class="header-anchor" href="#_1-暴力递归" aria-label="Permalink to &quot;1. 暴力递归&quot;">​</a></h3><p>根据斐波那契数列的表达式：<code>F[n]=F[n-1]+F[n-2]（n&gt;=2,F[0]=0,F[1]=1)</code>，可以使用暴力递归从 n 开始由上向下计算 <code>F[n]</code> 的结果。</p><ul><li><strong>对于递归问题，一定要画出递归树。</strong></li></ul><p><img src="https://s2.loli.net/2025/07/18/ubQo4LjeZfhDVwt.png" alt="image.png" loading="lazy"></p><ul><li><p>递归的时间复杂度</p><p><strong>递归的子问题个数 * 子问题解决时间。</strong></p><p>暴力递归求斐波那契数的子问题个数是指数倍的，即 <strong>2^n</strong>，而每个子问题的计算实际上就是个加法运算，解决时间的复杂度为 <code>o(1)</code>。</p><p>所以 <strong>暴力递归求斐波那契数的时间复杂度是 o(2^n)</strong>。</p></li><li><p>实现代码</p></li></ul><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>public int fibForce(int n) {</span></span>
<span class="line"><span>        if (n == 0) {</span></span>
<span class="line"><span>            return 0;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        if (n == 1 || n == 2) {</span></span>
<span class="line"><span>            return 1;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        //递归计算前两个数的和</span></span>
<span class="line"><span>        return fibForce(n - 1) + fibForce(n - 2);</span></span>
<span class="line"><span>    }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ul><li><p>暴力递归的缺陷</p><p>通过递归树可以发现，计算 <code>f(3)</code> 等子问题的时候发生了重复计算的问题，即发生了【重叠子问题】的现象。这也是暴力递归效率低下的原因，可以通过【备忘录】和【DP-table】来优化。</p></li></ul><h3 id="_2-带备忘录的递归" tabindex="-1">2. 带备忘录的递归 <a class="header-anchor" href="#_2-带备忘录的递归" aria-label="Permalink to &quot;2. 带备忘录的递归&quot;">​</a></h3><p>在明确了<strong>子问题会发生重复计算</strong>的问题情况下，可以使用数组或者哈希表等创建一个备忘录，来保存子问题的计算结果。</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>    /**</span></span>
<span class="line"><span>     * 使用备忘录</span></span>
<span class="line"><span>     * 从递归树自上向下计算</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    public int fibBackup(int n) {</span></span>
<span class="line"><span>        //备忘录【保存已计算的结果】</span></span>
<span class="line"><span>        int[] nums = new int[n + 1];</span></span>
<span class="line"><span>        return helper(nums, n);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private int helper(int[] nums, int n) {</span></span>
<span class="line"><span>        if (n == 0 || n == 1) {</span></span>
<span class="line"><span>            return n;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        //判断数组【备忘录】是否已存在数据</span></span>
<span class="line"><span>        if (nums[n] != 0) {</span></span>
<span class="line"><span>            return nums[n];</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        nums[n] = helper(nums, n - 1) + helper(nums, n - 2);</span></span>
<span class="line"><span>        return nums[n];</span></span>
<span class="line"><span>    }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>对应的递归树如下图，对比下可以发现子问题 <code>f(3)</code> 只计算了一次。</p><p><img src="https://s2.loli.net/2025/07/18/7aWl5VgnN1MZwit.png" alt="image.png" loading="lazy"></p><p>递归的时间复杂度是 <strong>递归的子问题个数 * 子问题解决时间。</strong></p><p>使用了备忘录之后，由于不存在重复计算，每个子问题只计算一次，所以递归的子问题个数变为了 n 个。而解决时间是不变的为 <code>o(1)</code>。</p><p>所以 <strong>带备忘录的递归求斐波那契数的时间复杂度是 o(n)</strong>。</p><h3 id="_3-dp-table" tabindex="-1">3. DP-table <a class="header-anchor" href="#_3-dp-table" aria-label="Permalink to &quot;3. DP-table&quot;">​</a></h3><p>不论是暴力递归还是带备忘录的递归，本质上都是从 <code>F(n)</code> 开始由上向下计算。由于我们已知最小的 <code>F(0)</code> 和 <code>F(1)</code> 的结果值，根据 <code>F(0)</code> 和 <code>F(1)</code> 可求出 <code>F(2)</code>的结果，然后将计算的结果存到类似备忘录的数组或哈希表中（称为 DP-table）。根据表达式可以实现由下往上计算，最终可得出 <code>F(n)</code> 的结果。</p><p><em>本质上由上向下和由下往上的效率是一致的。</em></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>    public int fib(int n) {</span></span>
<span class="line"><span>        //DP-table</span></span>
<span class="line"><span>        if (n == 0 || n == 1) {</span></span>
<span class="line"><span>            return n;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>          //设置初始值</span></span>
<span class="line"><span>        int[] nums = new int[n + 1];</span></span>
<span class="line"><span>        nums[1] = 1;</span></span>
<span class="line"><span>        for (int i = 2; i &lt;= n; i++) {</span></span>
<span class="line"><span>              //保存子问题结果到DP-table</span></span>
<span class="line"><span>            nums[i] = nums[i - 1] + nums[i - 2];</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return nums[n];</span></span>
<span class="line"><span>    }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>在DP-table 的使用过程，可以发现其实使用到 DP-table 的数据只是最近两个子问题的结果，通过优化可以节省 DP-table 的空间。</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>    public int fibOptimization(int n) {</span></span>
<span class="line"><span>        //n-2 子问题结果</span></span>
<span class="line"><span>        int pre=0;</span></span>
<span class="line"><span>          //n-1 子问题结果</span></span>
<span class="line"><span>        int curr=1;</span></span>
<span class="line"><span>          //n 子问题结果</span></span>
<span class="line"><span>        int sum=0;</span></span>
<span class="line"><span>        if (n == 0 || n == 1) {</span></span>
<span class="line"><span>            return n;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        for (int i = 2; i &lt;= n; i++) {</span></span>
<span class="line"><span>            sum = pre+curr;</span></span>
<span class="line"><span>            pre=curr;</span></span>
<span class="line"><span>            curr=sum;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return sum;</span></span>
<span class="line"><span>    }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div>`,40)]))}const d=s(l,[["render",i]]);export{m as __pageData,d as default};
