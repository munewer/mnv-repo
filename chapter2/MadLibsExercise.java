package chapter2;

import java.util.Scanner;

public class MadLibsExercise {

    public static void main(String args[]) {
        //Asks a user for a season of the year, whole number and adjective
        System.out.println("Please enter the adjective");
        Scanner scanner= new Scanner(System.in);
        String adjective= scanner.next();

        System.out.println("Please enter the season of the year");
        String season = scanner.next();

        System.out.println("Please enter amount cups of coffee");
        int number = scanner.nextInt();
        scanner.close();

        //Use the input to complete sentence which is "On a [adjective][season of the year] day,I drink a minimum  of [whole cups] of coffee"
        System.out.println("On a " + adjective +" "+season+" day, I drink a minimum of "+number+" of coffee");

    }


}
