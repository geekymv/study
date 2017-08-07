## 类加载器基本概念 ##
- 类加载器（class loader）用来加载Java类到Java虚拟机中。一般来说，Java虚拟机使用Java类的方式如下：Java源程序（.java文件）在经过
Java编译器编译之后就被转换成Java字节代码（.class文件），类加载器负责读取Java字节代码，并转换成java.lang.Class类的一个实例。每个这
样的实例用来表示一个Java类。通过此实例的newInstance方法就可以创建出该类的对象。实际的情况可能更复杂，如果Java字节代码可能是通过工具
动态生成的，也可能是通过网络下载的。基本上所有的类加载器都是java.lang.ClassLoader类的一个实例。
