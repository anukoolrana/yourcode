
// A
// for (let i = 1; i <= 7; i++) {
//     for (let j = 1; j <= 7; j++) {
//         if (i + j == 7 + 1 || i==5&&(j>=3&&j<=7)) {
//             process.stdout.write("* ")
//         } else {
//             process.stdout.write("  ")
//         }
//     }

//     for (let j = 1; j <= 7; j++) {
//         if (i == j|| i==5&&(j>=1&&j<=5)) {
//             process.stdout.write("* ")
//         } else {
//             process.stdout.write("  ")
//         }
//     }
//     console.log()
// }





// N
// for(i=1;i<=7;i++){
//     for(j=1;j<=7;j++){
//         if(j==1||j==7||i==j){
//             process.stdout.write("*")
//         }else{
//             process.stdout.write(" ")
//         }
//     }
//     console.log()
// }

// U
// for(i=1;i<=7;i++){
    // for(j=1;j<=7;j++){
    //     if(j==1||j==7||i==7&&(j>=2&&j<=6)){
    //         process.stdout.write("*")
    //     }else{
    //         process.stdout.write(" ")
    //     }
    // }
//     console.log()
// }

// K

// for(i=1;i<=7;i++){
    // for(j=1;j<=7;j++){
    //     if(j==1||i==4&&j==2||i==3&&j==3||i==2&&j==4||i==1&&j==5||i==5&&j==2||i==6&&j==3||i==7&&j==4){
    //         process.stdout.write("*")
    //     }else{
    //         process.stdout.write(" ")
    //     }
    // }
//     console.log()
// }

// O

// for(i=1;i<=7;i++){
//     for(j=1;j<=7;j++){
//         if(j==1||j==5||i==1&&(j>=2&&j<=7)||i==7&&(j>=2&&j<=7)){
//             process.stdout.write("*")
//         }else{
//             process.stdout.write("  ")
//         }
//     }
//     console.log()
// }

// L

// for(i=1;i<=7;i++){
    // for(j=1;j<=7;j++){
    //     if(j==1||i==7&&(j>=2&&j<=7)){
    //         process.stdout.write("*")
    //     }else{
    //         process.stdout.write(" ")
    //     }
    // }
//     console.log()
// }


for (let i = 1; i <= 7; i++) {
    for (let j = 1; j <= 7; j++) {
        if (i + j == 7 + 1 || i==5&&(j>=3&&j<=7)) {
            process.stdout.write("* ")
        } else {
            process.stdout.write("  ")
        }
    }

    for (let j = 1; j <= 7; j++) {
        if (i == j|| i==5&&(j>=1&&j<=5)) {
            process.stdout.write("* ")
        } else {
            process.stdout.write("  ")
        }
    }
    
        for(j=1;j<=7;j++){
            if(j==1||j==7||i==j){
                process.stdout.write("* ")
            }else{
                process.stdout.write("  ")
            }
        }

        for(j=1;j<=7;j++){
            if(j==1||j==7||i==7&&(j>=2&&j<=6)){
                process.stdout.write("*")
            }else{
                process.stdout.write(" ")
            }
        }
        for(j=1;j<=7;j++){
            if(j==1||i==4&&j==2||i==3&&j==3||i==2&&j==4||i==1&&j==5||i==5&&j==2||i==6&&j==3||i==7&&j==4){
                process.stdout.write("*")
            }else{
                process.stdout.write(" ")
            }
        }
        for(j=1;j<=7;j++){
            if(j==1||j==5||i==1&&(j>=2&&j<=7)||i==7&&(j>=2&&j<=7)){
                process.stdout.write("*  ")
            }else{
                process.stdout.write("    ")
            }
        }
    
    for(j=1;j<=7;j++){
        if(j==1||j==5||i==1&&(j>=2&&j<=7)||i==7&&(j>=2&&j<=7)){
            process.stdout.write("*  ")
        }else{
            process.stdout.write("    ")
        }
    }
    for(j=1;j<=7;j++){
        if(j==1||i==7&&(j>=2&&j<=7)){
            process.stdout.write("*")
        }else{
            process.stdout.write(" ")
        }
    }

       
        
    
    
    console.log()
}