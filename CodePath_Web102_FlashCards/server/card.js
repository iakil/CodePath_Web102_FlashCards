// Image credits: Kickstarter
const cards =  [
    {
    id: 1,
    level: "Easy",
    question: "What is batch processing?",
    answer: "Came about in the 1950's. Jobs with similar needs were batched together and were run as a group. The operating system's major task was to automatically transfer control from one job to the following one. A batch system is characterized by the lack of interaction between the user and the job during execution.",
   
    
    },


    {
    id: 2,
    level: "Easy",
    question: "What is multiprogramming?",
    answer: "2nd gen operating system from the 60's. One CPU, multiple processes ready for execution (concurrently). In a multiprogramming OS there is competition among processes for resources (memory, the CPU, etc.)",

    },


    {
    id: 3,
    level: "Easy",
    question: "What is multiprocessing?",
    answer: "Several processors are used on a single computer system to increase the processing power of the machine. Processes share the computer bus, the clock, and sometimes memory and peripheral devices.",
    },


    {
    id: 4,
    level: "Medium",
    question: "What are timesharing systems?",
    answer: "Introduced after multiprocessing, it is a special type of multiprogramming environment with 1 CPU and many processors. Time sharing systems support multiple users and terminals. Uses pre-emptive 'priority' scheduling algorithm. An example are the mars/venus at qc computer dept.",
    },


    {
    id: 5,
    level:  "Medium",
    question: "What are Real-Time Environments and what types are there?",
    answer: "4th gen env. Real-Time is used when there are rigid time requirements so it has fixed time constraints. Processing must be done in the given amount of time.",
   
    },

    {
    id: 6,
    level: "Medium",
    question: "What is the task of a bootstrap program?",
    answer: "A bootstrap program is the first code that is executed when the computer system is started. The entire operating system depends on the bootstrap program to work correctly as it loads the operating system. In the above image, the bootstrap program is a part of ROM which is the non-volatile memory. The operating system is loaded into the RAM by the bootstrap program after the start of the computer system. Then the operating system starts the device drivers.",
    
    },

    {
    id: 7,
    level: "Medium",
    question: "What is the boot record?",
    answer: "Also called the Master Boot Record (MBR), it points to the full bootstrap program, the location to load the operating system.",
    
    },

    {
    id: 8,
    level: "Hard",
    question: "What is a TSR process?",
    answer: "a computer system call in DOS computer operating systems that returns control to the system as if the program has quit, but keeps the program in memory.",
    
    },

    {
    id: 9,
    level: "Hard",
    question: "PCB Examples:",
    answer: 'Process State, Process Number, Program Counter, Registers, Memory limits, Open files etc',
   
    },

    {
    id: 10,
    level: "Hard",
    question: "CPU mode in which all instructions are enabled. The kernel runs in this mode.",
    answer: 'Kernel mode',
    
    },
    {
      id: 11,
      level: "Hard",
      question: "CPU mode for executing user processes in which some instructions are limited or not allowed.",
      answer: 'User mode',
      
      }

   
]


  
  export default cards;