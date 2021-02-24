### Java实现执行系统命令

#### 需求

发布gitbook时，需要在文件路径执行`gitbook build`来生成静态文件，通过java在指定路径执行`gitbook build`命令。

#### 思路

使用jdk自带的`Runtime类`的`exec()`方法，执行指定命令。

> Process process = Runtime.getRuntime().exec("gitbook build", null, dir)

#### 代码实现

```java
/**
 * @author Albert
 * @date 2021/2/20 下午2:38
 */
public class ShellUtils {

    public static void main(String[] args) throws IOException {
        //指定目录
        File dir = new File("/Users/yangjunwei/gitbook");
        //执行进程命令
        Process process = Runtime.getRuntime().exec("gitbook build", null, dir);
        // 记录dos命令的返回信息
        StringBuffer resStr = new StringBuffer();
        // 获取返回信息的流
        InputStream in = process.getInputStream();
        Reader reader = new InputStreamReader(in);
        BufferedReader bReader = new BufferedReader(reader);
        for (String res = ""; (res = bReader.readLine()) != null; ) {
            resStr.append(res + "\n");
        }
        System.out.println(resStr.toString());
        bReader.close();
        reader.close();
        process.getOutputStream().close();
    }


}
```
