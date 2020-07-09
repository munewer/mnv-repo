package chapter2;

import java.util.Scanner;

public class GrossPayCalculator {

    //main method
    public static void main(String args[]){

        //get the numbers of worked hours
        System.out.println("Please enter the worked hours");
        Scanner scanner= new Scanner(System.in);
        int hour = scanner.nextInt();


        //Get the hourly pay rate
        System.out.println("Please enter the hourly pay rate");
        double payment = scanner.nextDouble();
        scanner.close();

        //Multiply hours and pay rate
        double grossPayResult= hour*payment;


        //Display result
        System.out.println("The total grosspay is " + grossPayResult);

    }
}
