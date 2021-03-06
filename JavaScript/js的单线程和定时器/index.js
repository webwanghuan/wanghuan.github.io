/*
 了解一下js的单线程和运行机制
  js是单线程的：
  意味着所有任务都需要排队，前一个任务结束，才会执行后一个任务，如果前一个任务耗时很长，后一个任务需要一直等待。
  设计者意识到：
  主线程可以不管IO设备，挂起处于等待中的任务，运行后边的任务，等到IO任务返回结果，在回过头，把挂起的任务继续执行下去。
  任务分类:
  同步任务：在主线程上排队执行的任务，只有前一个任务执行完毕后，才能执行后一个任务。
  异步任务：不进入主线程，而进入“任务队列”的任务，只有“任务队列”通知主线程，某个异步任务可以执行，      
 */
