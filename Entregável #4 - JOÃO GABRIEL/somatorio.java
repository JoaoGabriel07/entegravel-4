public static int sum(int[] numbers) {
    int total = 0;
    for (int i = 0; i < numbers.length; i++) {
      total += numbers[i];
    }
    return total;
  }
  
  System.out.println(sum(new int[]{1, 2, 3, 4, 5})); // 15
  System.out.println(sum(new int[]{10, 20, 30})); // 60