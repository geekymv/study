## CAS(Compare And Swap) 算法 ##

## i++ 的原子性问题 ##
- i++ 实际上分为三个步骤“读-改-写”

```java
int i = 10;
i = i++; // 10

int temp = i;
i = i + 1;
i = temp;
```

## 原子变量
- jdk1.5以后 java.util.concurrent.atomic 包下提供了常用的原子变量
- volatile 保证内存可见性
- CAS(Compare And Swap)算法保证数据的原子性，CAS算法是硬件对于并发操作共享数据的支持
- CAS 包含了三个操作数，内存值V、预估值A、更新值B，当且仅当V == A 时，V = B，否则将不做任何操作。
