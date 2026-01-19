public class Calculator {

    public static int add(int a, int b) {
        return a + b;
    }

    public static int subtract(int a, int b) {
        return a - b;
    }

    public static void main(String[] args) {
        System.out.println("Add: " + add(5, 3));
        System.out.println("Subtract: " + subtract(5, 3));
    }
}
