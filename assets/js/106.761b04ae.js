(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{470:function(t,_,v){"use strict";v.r(_);var r=v(26),d=Object(r.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"docker"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[t._v("#")]),t._v(" Docker")]),t._v(" "),v("h2",{attrs:{id:"基本知识"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#基本知识"}},[t._v("#")]),t._v(" 基本知识")]),t._v(" "),v("h3",{attrs:{id:"_1-docker-是什么"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-docker-是什么"}},[t._v("#")]),t._v(" 1. Docker 是什么？")]),t._v(" "),v("p",[t._v("docker 是一种容器化虚拟技术，解决了运行环境和配置问题，方便持续集成并有助于项目整体发布。")]),t._v(" "),v("h3",{attrs:{id:"_2-docker-能干嘛"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-docker-能干嘛"}},[t._v("#")]),t._v(" 2. Docker 能干嘛？")]),t._v(" "),v("p",[v("em",[t._v("一次构建、随处运行。")])]),t._v(" "),v("ul",[v("li",[t._v("更快速的应用交付和部署。")]),t._v(" "),v("li",[t._v("更便捷的升级和扩缩容。")]),t._v(" "),v("li",[t._v("更简单的系统运维。")]),t._v(" "),v("li",[t._v("更高效的计算源利用。")])]),t._v(" "),v("h2",{attrs:{id:"基本组成"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#基本组成"}},[t._v("#")]),t._v(" 基本组成")]),t._v(" "),v("h3",{attrs:{id:"_1-镜像"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-镜像"}},[t._v("#")]),t._v(" 1. 镜像")]),t._v(" "),v("blockquote",[v("p",[t._v("Docker 镜像（image）就是一个只读的模版，一个镜像可以创建很多容器。")])]),t._v(" "),v("h3",{attrs:{id:"_2-容器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-容器"}},[t._v("#")]),t._v(" 2. 容器")]),t._v(" "),v("blockquote",[v("p",[t._v("Docker 利用容器（Container）独立运行一个或一组应，容器是用镜像创建的运行实例。")]),t._v(" "),v("p",[t._v("它可以被启动、开始、停止、删除。每个容器都是相互隔离的、保证安全的平台。")]),t._v(" "),v("p",[v("em",[t._v("可以把容器看做是一个简易版的 Linux 环境")]),t._v("（包括root用户权限、进程空间、用户空间和网络空间等）和运行在其中的应用程序。")]),t._v(" "),v("p",[t._v("容器的定义和镜像几乎一模一样，也是一堆层的统一视角，唯一区别在于容器的最上面那一层是可读可写的。")])]),t._v(" "),v("h3",{attrs:{id:"_3-仓库"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-仓库"}},[t._v("#")]),t._v(" 3. 仓库")]),t._v(" "),v("blockquote",[v("p",[t._v("仓库（Repository）是集中存放镜像文件的场所。")]),t._v(" "),v("p",[t._v("仓库(Repository)和仓库注册服务器（Registry）是有区别的。仓库注册服务器上往往存放着多个仓库，每个仓库中又包含了多个镜像，每个镜像有不同的标签（tag）。")]),t._v(" "),v("p",[t._v("仓库分为公开仓库（Public）和私有仓库（Private）两种形式。")]),t._v(" "),v("p",[t._v("最大的公开仓库是 Docker Hub(https://hub.docker.com/)，")]),t._v(" "),v("p",[t._v("存放了数量庞大的镜像供用户下载。国内的公开仓库包括阿里云 、网易云 等")])]),t._v(" "),v("h3",{attrs:{id:"_4-基本组成总结"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-基本组成总结"}},[t._v("#")]),t._v(" 4. 基本组成总结")]),t._v(" "),v("blockquote",[v("p",[t._v("需要正确的理解仓储/镜像/容器这几个概念:")]),t._v(" "),v("p",[t._v("Docker 本身是一个容器运行载体或称之为管理引擎。我们把应用程序和配置依赖打包好形成一个可交付的运行环境，这个打包好的运行环境就似乎 image镜像文件。只有通过这个镜像文件才能生成 Docker 容器。image 文件可以看作是容器的模板。Docker 根据 image 文件生成容器的实例。同一个 image 文件，可以生成多个同时运行的容器实例。")]),t._v(" "),v("p",[t._v("*  image 文件生成的容器实例，本身也是一个文件，称为镜像文件。")]),t._v(" "),v("p",[t._v("*  一个容器运行一种服务，当我们需要的时候，就可以通过docker客户端创建一个对应的运行实例，也就是我们的容器")]),t._v(" "),v("p",[t._v("* 至于仓储，就是放了一堆镜像的地方，我们可以把镜像发布到仓储中，需要的时候从仓储中拉下来就可以了。")])]),t._v(" "),v("h2",{attrs:{id:"常见问题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[t._v("#")]),t._v(" 常见问题")]),t._v(" "),v("h3",{attrs:{id:"_1-docker-的工作原理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-docker-的工作原理"}},[t._v("#")]),t._v(" 1. Docker 的工作原理")]),t._v(" "),v("p",[t._v("Docker是一个 Client-Server 结构的系统，Docker 的守护进程运行在主机上， 然后通过 Socket 连接从客户端访问，守护进程从客户端接受"),v("strong",[t._v("命令")]),t._v("并管理运行在主机上的容器。")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AlbertYang0801/pic-bed@main/img/20210831195531.png",alt:"img"}})]),t._v(" "),v("ol",[v("li",[t._v("在客户端发起的命令都是访问 Docker_Host 的守护线程 Docker daemon；")]),t._v(" "),v("li",[t._v("Repository 是镜像仓库，可以拉取镜像到本地。")]),t._v(" "),v("li",[t._v("从镜像创建的运行实例就是容器，来运行应用。")])]),t._v(" "),v("h2",{attrs:{id:"常用命令"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[t._v("#")]),t._v(" 常用命令")]),t._v(" "),v("h3",{attrs:{id:"docker启动相关"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#docker启动相关"}},[t._v("#")]),t._v(" Docker启动相关")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("功能")]),t._v(" "),v("th",[t._v("相关命令")]),t._v(" "),v("th")])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("启动docker")]),t._v(" "),v("td",[t._v("systemctl start docker")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("查看docker版本")]),t._v(" "),v("td",[t._v("docker -v")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("设置开机启动docker")]),t._v(" "),v("td",[t._v("systemctl enable docker")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("停止docker")]),t._v(" "),v("td",[t._v("systemctl stop docker")]),t._v(" "),v("td")])])]),t._v(" "),v("h3",{attrs:{id:"docker镜像操作"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#docker镜像操作"}},[t._v("#")]),t._v(" Docker镜像操作")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("功能")]),t._v(" "),v("th",[t._v("相关命令")]),t._v(" "),v("th")])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("Docker命令文档")]),t._v(" "),v("td",[t._v("docker --help")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("查看本地镜像列表")]),t._v(" "),v("td",[t._v("docker images")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("列出本地所有镜像")]),t._v(" "),v("td",[t._v("docker images -a")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("查看本地镜像列表 - 只显示镜像ID")]),t._v(" "),v("td",[t._v("docker images -q")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("列出本地所有镜像的ID")]),t._v(" "),v("td",[t._v("docker images -qa")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("显示镜像的摘要信息")]),t._v(" "),v("td",[t._v("docker images -digests")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("显示完整的镜像信息(完整镜像ID)")]),t._v(" "),v("td",[t._v("docker images -no-trunc")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("检索镜像(从 Docker-Hub 检索)")]),t._v(" "),v("td",[t._v("docker search")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("拉取镜像(从配置的阿里云拉取)")]),t._v(" "),v("td",[t._v("docker pull 镜像名:tag(版本号.默认为latest)")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("删除本地指定镜像")]),t._v(" "),v("td",[t._v("docker rmi image-id")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("强制删除单个镜像")]),t._v(" "),v("td",[t._v("docker rmi -f image-id")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("删除多个镜像")]),t._v(" "),v("td",[t._v("docker rmi -f image:TAG image:TAG")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("删除全部镜像")]),t._v(" "),v("td",[t._v("docker rmi -f $(docker images -qa)")]),t._v(" "),v("td")])])]),t._v(" "),v("h3",{attrs:{id:"docker容器操作"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#docker容器操作"}},[t._v("#")]),t._v(" Docker容器操作")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("功能")]),t._v(" "),v("th",[t._v("相关命令")]),t._v(" "),v("th")])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("根据镜像名在后台启动容器")]),t._v(" "),v("td",[t._v("docker run --name mytomcat -d tomcat:latest")]),t._v(" "),v("td",[t._v("--name:给容器命名 -d 在后台启动")])]),t._v(" "),v("tr",[v("td",[t._v("根据镜像id启动容器，并进入容器开启伪终端")]),t._v(" "),v("td",[t._v("docker run -it image-id")]),t._v(" "),v("td",[t._v("--i:以交互模式启动容器，-t:创建伪终端")])]),t._v(" "),v("tr",[v("td",[t._v("启动端口映射的mysql镜像(指定密码)")]),t._v(" "),v("td",[t._v("docker run -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 -d mysql:5.6")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("列出docker正在运行的容器")]),t._v(" "),v("td",[t._v("docker ps")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("上一个运行的容器")]),t._v(" "),v("td",[t._v("docker ps -l")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("列出所有容器(包含运行过的)")]),t._v(" "),v("td",[t._v("docker ps -a")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("显示最近n(3)个创建的容器")]),t._v(" "),v("td",[t._v("docker ps -n 3")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("只显示容器编号(静默模式)")]),t._v(" "),v("td",[t._v("docker ps -q")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("不截断输出(完整容器ID，默认的输出12位左右)")]),t._v(" "),v("td",[t._v("docker ps --no-trunc")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("容器停止退出")]),t._v(" "),v("td",[t._v("exit")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("容器不停止退出")]),t._v(" "),v("td",[t._v("ctrl+P+Q")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("启动容器")]),t._v(" "),v("td",[t._v("docker start 容器ID或容器名")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("重启容器")]),t._v(" "),v("td",[t._v("docker restart 容器ID或容器名")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("停止容器")]),t._v(" "),v("td",[t._v("docker stop 容器ID或容器名")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("强制停止容器")]),t._v(" "),v("td",[t._v("docker kill 容器ID或容器名")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("删除已停止的容器")]),t._v(" "),v("td",[t._v("docker rm 容器ID")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("删除全部容器")]),t._v(" "),v("td",[t._v("docker rm -f $(docker ps - a -q)")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("停止容器")]),t._v(" "),v("td",[t._v("docker stop 容器ID或容器名")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("停止容器")]),t._v(" "),v("td",[t._v("docker stop 容器ID或容器名")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("停止容器")]),t._v(" "),v("td",[t._v("docker stop 容器ID或容器名")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("停止容器")]),t._v(" "),v("td",[t._v("docker stop 容器ID或容器名")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("---------------------------------------------")]),t._v(" "),v("td",[t._v("----------------------------------------------------")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("启动守护式容器(后台运行，必须有一个前台进程，否则自动退出)")]),t._v(" "),v("td",[t._v("docker run -d 容器名")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("查看容器日志")]),t._v(" "),v("td",[t._v("docker logs 容器ID")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("加入时间戳")]),t._v(" "),v("td",[t._v("docker logs -t")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("打印最新的日志")]),t._v(" "),v("td",[t._v("docker logs -f")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("显示最后多少条")]),t._v(" "),v("td",[t._v("docker logs --tail")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("查看容器内运行的进程")]),t._v(" "),v("td",[t._v("docker top 容器ID")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("查看容器内部细节")]),t._v(" "),v("td",[t._v("docker inspect 容器ID")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("进入正在运行的终端(直接进入容器的伪终端，不会启动新的进程)")]),t._v(" "),v("td",[t._v("docker attach 容器ID")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("进入正在运行的终端(在容器中打开新的终端，并且可以启动新的线程)")]),t._v(" "),v("td",[t._v("docker exec -it 容器I")]),t._v(" "),v("td",[t._v("例如:mysql docker exec -it 容器ID /bin/bash")])]),t._v(" "),v("tr",[v("td",[t._v("从容器内拷贝文件到主机上")]),t._v(" "),v("td",[t._v("docker cp 容器ID:容器内路径 目的主机路径")]),t._v(" "),v("td")])])]),t._v(" "),v("h3",{attrs:{id:"其它命令总结"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#其它命令总结"}},[t._v("#")]),t._v(" 其它命令总结")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("功能")]),t._v(" "),v("th",[t._v("相关命令")]),t._v(" "),v("th")])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("启动zookeeper命令(默认端口为2181,2888,3888,8080):")]),t._v(" "),v("td",[t._v("docker run --name some-zookeeper --restart always -d zookeeper")]),t._v(" "),v("td",[t._v("docker run --name zk01 -p 2181:2181 --restart always -d 镜像ID")])]),t._v(" "),v("tr",[v("td",[t._v("Docker中的MySQL容器数据持久化命令")]),t._v(" "),v("td",[t._v("docker run -p 3306:3306 --name mysql -v /usr/local/mysql/conf:/etc/mysql/conf.d -v /usr/local/mysql/logs:/logs -v /usr/local/mysql/data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=123456 -d mysql")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("进入tomcat容器内部")]),t._v(" "),v("td",[t._v("docker exec -it 容器ID /bin/bash")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("Docker中的Tomcat容器实现挂载本地目录")]),t._v(" "),v("td",[t._v("docker run -d -p 8080:8080 --name tomcat -v /usr/local/docker/docker-tomcat/tomcat-war:/usr/local/tomcat/webapps -v /usr/local/docker/docker-tomcat/tomcat-conf:/usr/local/tomcat/conf tomcat:8.5")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("Docker中的Tomcat容器启动只挂载本地war包目录")]),t._v(" "),v("td",[t._v("docker run -d -p 8080:8080 --name tomcat -v /usr/local/docker/docker-tomcat/tomcat-war:/usr/local/tomcat/webapps tomcat:8.5")]),t._v(" "),v("td")])])])])}),[],!1,null,null,null);_.default=d.exports}}]);