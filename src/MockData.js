export const MockData = [
    // ===== CABLES & CONNECTORS =====
    {
        id: 1,
        subject: "IT",
        data: [
            {
                id: 1,
                category: "Cables",
                difficulty: "Easy",
                question:
                    "Which video connector transmits both digital video and audio on a single cable?",
                options: ["VGA", "DVI", "HDMI", "DisplayPort"],
                answer: "HDMI",
            },
            {
                id: 2,
                category: "Cables",
                difficulty: "Medium",
                question:
                    "Which USB version supports transfer speeds up to 10 Gbps?",
                options: ["USB 2.0", "USB 3.0", "USB 3.1 Gen 2", "USB-C 1.1"],
                answer: "USB 3.1 Gen 2",
            },
            {
                id: 3,
                category: "Cables",
                difficulty: "Medium",
                question:
                    "Which display connector was designed as a competitor to HDMI and uses Thunderbolt cables?",
                options: ["VGA", "DVI", "DisplayPort", "Mini-DVI"],
                answer: "DisplayPort",
            },
            {
                id: 4,
                category: "Cables",
                difficulty: "Easy",
                question: "VGA transmits what type of signal?",
                options: ["Digital", "Analog", "Hybrid", "Optical"],
                answer: "Analog",
            },
            {
                id: 5,
                category: "Cables",
                difficulty: "Easy",
                question:
                    "Which cable type uses twisted pairs and RJ-45 connectors for network connections?",
                options: ["HDMI", "Ethernet", "Coaxial", "SATA"],
                answer: "Ethernet",
            },
            {
                id: 6,
                category: "Cables",
                difficulty: "Medium",
                question:
                    "A technician connects a computer to a projector. Which connector is most likely used for analog video?",
                options: ["HDMI", "VGA", "DVI-D", "DisplayPort"],
                answer: "VGA",
            },
            {
                id: 7,
                category: "Cables",
                difficulty: "Easy",
                question:
                    "Which connector type carries both power and data in modern mobile devices?",
                options: ["USB-C", "Micro-B", "Lightning", "USB-A"],
                answer: "USB-C",
            },
            {
                id: 8,
                category: "Cables",
                difficulty: "Medium",
                question:
                    "What is the maximum length of a standard USB 2.0 cable before signal degradation?",
                options: ["3 ft", "5 m", "10 m", "15 m"],
                answer: "5 m",
            },
            {
                id: 9,
                category: "Cables",
                difficulty: "Easy",
                question:
                    "Which connector is commonly used for coaxial cable TV input?",
                options: ["RJ-45", "RJ-11", "F-type", "LC"],
                answer: "F-type",
            },
            {
                id: 10,
                category: "Cables",
                difficulty: "Hard",
                question:
                    "Which DisplayPort feature allows multiple monitors to be daisy-chained from one port?",
                options: [
                    "Dual-Link DVI",
                    "Multi-Stream Transport (MST)",
                    "Adaptive Sync",
                    "HDCP",
                ],
                answer: "Multi-Stream Transport (MST)",
            },

            // // ===== MOTHERBOARDS =====
            // {
            //     id: 11,
            //     category: "Motherboards",
            //     difficulty: "Easy",
            //     question: "The small battery on the motherboard powers what?",
            //     options: ["GPU fan", "BIOS/CMOS", "CPU cache", "PCIe slot"],
            //     answer: "BIOS/CMOS",
            // },
            // {
            //     id: 12,
            //     category: "Motherboards",
            //     difficulty: "Medium",
            //     question: "Which motherboard form factor is the smallest?",
            //     options: ["ATX", "MicroATX", "Mini-ITX", "E-ATX"],
            //     answer: "Mini-ITX",
            // },
            // {
            //     id: 13,
            //     category: "Motherboards",
            //     difficulty: "Medium",
            //     question:
            //         "Which component determines the socket type required?",
            //     options: ["CPU", "RAM", "GPU", "PSU"],
            //     answer: "CPU",
            // },
            // {
            //     id: 14,
            //     category: "Motherboards",
            //     difficulty: "Medium",
            //     question: "What is the main role of the chipset?",
            //     options: [
            //         "Provide power regulation",
            //         "Manage data flow between CPU, memory, and peripherals",
            //         "Store BIOS configuration",
            //         "Provide audio output",
            //     ],
            //     answer: "Manage data flow between CPU, memory, and peripherals",
            // },
            // {
            //     id: 15,
            //     category: "Motherboards",
            //     difficulty: "Easy",
            //     question: "Which socket type is most common for Intel CPUs?",
            //     options: ["PGA", "LGA", "BGA", "ZIF"],
            //     answer: "LGA",
            // },
            // {
            //     id: 16,
            //     category: "Motherboards",
            //     difficulty: "Medium",
            //     question:
            //         "The Northbridge traditionally connects directly to which components?",
            //     options: [
            //         "Storage",
            //         "RAM and CPU",
            //         "Power supply",
            //         "USB ports",
            //     ],
            //     answer: "RAM and CPU",
            // },
            // {
            //     id: 17,
            //     category: "Motherboards",
            //     difficulty: "Medium",
            //     question: "The Southbridge controls which type of devices?",
            //     options: [
            //         "RAM and CPU",
            //         "High-speed graphics",
            //         "Peripheral and I/O devices",
            //         "CPU instruction sets",
            //     ],
            //     answer: "Peripheral and I/O devices",
            // },
            // {
            //     id: 18,
            //     category: "Motherboards",
            //     difficulty: "Easy",
            //     question: "What does UEFI stand for?",
            //     options: [
            //         "Unified Extensible Firmware Interface",
            //         "Universal EFI Format Integration",
            //         "Unified Embedded Function Interface",
            //         "Universal External File Interface",
            //     ],
            //     answer: "Unified Extensible Firmware Interface",
            // },
            // {
            //     id: 19,
            //     category: "Motherboards",
            //     difficulty: "Hard",
            //     question:
            //         "Which feature allows a user to update BIOS/UEFI without a CPU installed?",
            //     options: [
            //         "Quick Boot",
            //         "EZ Flash / BIOS Flashback",
            //         "POST Check",
            //         "Secure Boot",
            //     ],
            //     answer: "EZ Flash / BIOS Flashback",
            // },
            // {
            //     id: 20,
            //     category: "Motherboards",
            //     difficulty: "Medium",
            //     question:
            //         "What is the main advantage of UEFI over legacy BIOS?",
            //     options: [
            //         "Smaller storage space",
            //         "Limited boot drive size",
            //         "Support for drives > 2 TB and GUI interface",
            //         "Requires floppy disk updates",
            //     ],
            //     answer: "Support for drives > 2 TB and GUI interface",
            // },

            // // ===== CPU ARCHITECTURE =====
            // {
            //     id: 21,
            //     category: "CPU Architecture",
            //     difficulty: "Medium",
            //     question: "Which part of the CPU executes instructions?",
            //     options: ["ALU", "CU", "Register", "Cache"],
            //     answer: "ALU",
            // },
            // {
            //     id: 22,
            //     category: "CPU Architecture",
            //     difficulty: "Medium",
            //     question:
            //         "Which CPU component fetches, decodes, and executes instructions?",
            //     options: ["GPU", "Control Unit", "PSU", "FPU"],
            //     answer: "Control Unit",
            // },
            // {
            //     id: 23,
            //     category: "CPU Architecture",
            //     difficulty: "Easy",
            //     question: "Which CPU cache level is the smallest and fastest?",
            //     options: ["L1", "L2", "L3", "L4"],
            //     answer: "L1",
            // },
            // {
            //     id: 24,
            //     category: "CPU Architecture",
            //     difficulty: "Easy",
            //     question:
            //         "x64 processors can handle how many bits per instruction?",
            //     options: ["16", "32", "64", "128"],
            //     answer: "64",
            // },
            // {
            //     id: 25,
            //     category: "CPU Architecture",
            //     difficulty: "Medium",
            //     question: "Hyper-Threading allows what functionality?",
            //     options: [
            //         "Overclocking beyond factory limits",
            //         "One physical core to act as two logical processors",
            //         "Multiple CPUs to share L1 cache",
            //         "Hardware-based encryption",
            //     ],
            //     answer: "One physical core to act as two logical processors",
            // },
            // {
            //     id: 26,
            //     category: "CPU Architecture",
            //     difficulty: "Easy",
            //     question: "What is the main purpose of the CPU cache?",
            //     options: [
            //         "Store BIOS data",
            //         "Provide high-speed access to frequently used data",
            //         "Act as backup RAM",
            //         "Manage input/output",
            //     ],
            //     answer: "Provide high-speed access to frequently used data",
            // },
            // {
            //     id: 27,
            //     category: "CPU Architecture",
            //     difficulty: "Medium",
            //     question:
            //         "ARM architecture is most often used in which devices?",
            //     options: ["Servers", "Laptops", "Mobile devices", "Desktops"],
            //     answer: "Mobile devices",
            // },
            // {
            //     id: 28,
            //     category: "CPU Architecture",
            //     difficulty: "Easy",
            //     question:
            //         "The speed of a processor is primarily measured in what unit?",
            //     options: ["Watts", "Volts", "Hertz", "Bytes"],
            //     answer: "Hertz",
            // },
            // {
            //     id: 29,
            //     category: "CPU Architecture",
            //     difficulty: "Medium",
            //     question: "What is overclocking?",
            //     options: [
            //         "Increasing CPU voltage only",
            //         "Increasing clock speed beyond rated specifications",
            //         "Replacing thermal paste",
            //         "Adding more CPU cores",
            //     ],
            //     answer: "Increasing clock speed beyond rated specifications",
            // },
            // {
            //     id: 30,
            //     category: "CPU Architecture",
            //     difficulty: "Hard",
            //     question:
            //         "Which CPU feature isolates virtual machines for security?",
            //     options: [
            //         "Hyper-V",
            //         "Secure Boot",
            //         "Virtualization extensions",
            //         "ECC",
            //     ],
            //     answer: "Virtualization extensions",
            // },

            // // ===== EXPANSION CARDS & INSTALLATION =====
            // {
            //     id: 31,
            //     category: "Expansion Cards",
            //     difficulty: "Easy",
            //     question: "Which slot type is most common for modern GPUs?",
            //     options: ["PCI", "PCIe x16", "AGP", "ISA"],
            //     answer: "PCIe x16",
            // },
            // {
            //     id: 32,
            //     category: "Expansion Cards",
            //     difficulty: "Medium",
            //     question: "PCIe x1 slots are typically used for which cards?",
            //     options: [
            //         "Graphics cards",
            //         "Network or sound cards",
            //         "CPUs",
            //         "RAM modules",
            //     ],
            //     answer: "Network or sound cards",
            // },
            // {
            //     id: 33,
            //     category: "Expansion Cards",
            //     difficulty: "Hard",
            //     question: "Which expansion slot is legacy and mostly obsolete?",
            //     options: ["AGP", "PCIe x16", "PCIe x4", "M.2"],
            //     answer: "AGP",
            // },
            // {
            //     id: 34,
            //     category: "Motherboards",
            //     difficulty: "Medium",
            //     question: "The first step in installing a motherboard is what?",
            //     options: [
            //         "Install the CPU",
            //         "Install the standoffs and align the I/O shield",
            //         "Connect the front panel",
            //         "Mount the power supply",
            //     ],
            //     answer: "Install the standoffs and align the I/O shield",
            // },
            // {
            //     id: 35,
            //     category: "Power",
            //     difficulty: "Easy",
            //     question: "Which connector supplies power to the CPU?",
            //     options: [
            //         "4/8-pin ATX12V",
            //         "24-pin main",
            //         "PCIe 6-pin",
            //         "Molex",
            //     ],
            //     answer: "4/8-pin ATX12V",
            // },
            // {
            //     id: 36,
            //     category: "Motherboards",
            //     difficulty: "Medium",
            //     question:
            //         "Which component provides backward compatibility with legacy PCI slots?",
            //     options: ["Chipset", "Northbridge", "Southbridge", "BIOS"],
            //     answer: "Northbridge",
            // },

            // // ===== COOLING & POWER =====
            // {
            //     id: 41,
            //     category: "Cooling & Power",
            //     difficulty: "Medium",
            //     question: "What is the main purpose of thermal paste?",
            //     options: [
            //         "Insulate CPU from heat",
            //         "Improve heat transfer between CPU and cooler",
            //         "Secure the heatsink physically",
            //         "Prevent oxidation",
            //     ],
            //     answer: "Improve heat transfer between CPU and cooler",
            // },
            // {
            //     id: 42,
            //     category: "Cooling & Power",
            //     difficulty: "Medium",
            //     question:
            //         "What type of cooling system uses a liquid to transfer heat?",
            //     options: ["Passive", "Air", "Liquid", "Hybrid"],
            //     answer: "Liquid",
            // },
            // {
            //     id: 43,
            //     category: "Power",
            //     difficulty: "Medium",
            //     question:
            //         "The 24-pin connector on the motherboard provides what?",
            //     options: [
            //         "Power to the CPU",
            //         "Main system power",
            //         "GPU power",
            //         "Fan power",
            //     ],
            //     answer: "Main system power",
            // },
            // {
            //     id: 44,
            //     category: "Power",
            //     difficulty: "Easy",
            //     question:
            //         "What is the term for the total amount of power a PSU can provide?",
            //     options: [
            //         "Voltage rating",
            //         "Efficiency",
            //         "Wattage rating",
            //         "Load capacity",
            //     ],
            //     answer: "Wattage rating",
            // },
            // {
            //     id: 45,
            //     category: "Power",
            //     difficulty: "Medium",
            //     question:
            //         "When replacing a PSU, which factor is most important to match?",
            //     options: [
            //         "Color",
            //         "Connector type and wattage",
            //         "Fan size",
            //         "Case shape",
            //     ],
            //     answer: "Connector type and wattage",
            // },
            // {
            //     id: 46,
            //     category: "Power",
            //     difficulty: "Medium",
            //     question: "Which component converts AC to DC power?",
            //     options: ["UPS", "Battery", "Power Supply Unit", "Transformer"],
            //     answer: "Power Supply Unit",
            // },
            // {
            //     id: 47,
            //     category: "Cooling",
            //     difficulty: "Medium",
            //     question:
            //         "Which cooling method uses a fan attached directly to the heatsink?",
            //     options: ["Passive", "Active", "Liquid", "Radiant"],
            //     answer: "Active",
            // },
            // {
            //     id: 48,
            //     category: "Power",
            //     difficulty: "Easy",
            //     question:
            //         "What happens if the load exceeds the PSU’s wattage rating?",
            //     options: [
            //         "Computer runs faster",
            //         "System shuts down or PSU fails",
            //         "Voltage stabilizes automatically",
            //         "Fans spin faster",
            //     ],
            //     answer: "System shuts down or PSU fails",
            // },
            // {
            //     id: 49,
            //     category: "Power",
            //     difficulty: "Hard",
            //     question: "The term “rails” in a PSU refers to what?",
            //     options: [
            //         "Power distribution lines for each voltage level",
            //         "Motherboard slots",
            //         "GPU connectors",
            //         "RAM channels",
            //     ],
            //     answer: "Power distribution lines for each voltage level",
            // },
            // {
            //     id: 50,
            //     category: "Power",
            //     difficulty: "Easy",
            //     question:
            //         "When installing a PSU, what safety step should be done first?",
            //     options: [
            //         "Disconnect from wall power",
            //         "Touch the GPU",
            //         "Power on the system",
            //         "Reset BIOS",
            //     ],
            //     answer: "Disconnect from wall power",
            // },

            // // ===== SYSTEM MEMORY =====
            // {
            //     id: 51,
            //     category: "System Memory",
            //     difficulty: "Easy",
            //     question:
            //         "Which type of memory loses data when power is removed?",
            //     options: ["ROM", "Flash", "RAM", "SSD"],
            //     answer: "RAM",
            // },
            // {
            //     id: 52,
            //     category: "System Memory",
            //     difficulty: "Medium",
            //     question: "DDR4-3200 has what effective data rate?",
            //     options: ["1600 MHz", "2400 MHz", "3200 MHz", "6400 MHz"],
            //     answer: "3200 MHz",
            // },
            // {
            //     id: 53,
            //     category: "System Memory",
            //     difficulty: "Medium",
            //     question: "DDR3 DIMMs have how many pins?",
            //     options: ["184", "200", "240", "288"],
            //     answer: "240",
            // },
            // {
            //     id: 54,
            //     category: "System Memory",
            //     difficulty: "Medium",
            //     question: "Dual-channel memory requires what setup?",
            //     options: [
            //         "Identical capacity and speed modules in matching slots",
            //         "Any size modules installed anywhere",
            //         "ECC RAM only",
            //         "Laptops only",
            //     ],
            //     answer: "Identical capacity and speed modules in matching slots",
            // },
            // {
            //     id: 55,
            //     category: "System Memory",
            //     difficulty: "Medium",
            //     question:
            //         "Which memory type can detect and correct single-bit errors?",
            //     options: ["Parity", "ECC", "Non-ECC", "SDRAM"],
            //     answer: "ECC",
            // },
            // {
            //     id: 56,
            //     category: "System Memory",
            //     difficulty: "Easy",
            //     question: "Virtual memory uses which medium?",
            //     options: [
            //         "CPU cache",
            //         "Hard drive/SSD swap space",
            //         "BIOS chip",
            //         "Flash drive",
            //     ],
            //     answer: "Hard drive/SSD swap space",
            // },
            // {
            //     id: 57,
            //     category: "System Memory",
            //     difficulty: "Medium",
            //     question: "What is the purpose of memory addressing?",
            //     options: [
            //         "Give each byte a unique numeric address",
            //         "Encrypt memory data",
            //         "Manage virtual memory only",
            //         "Prevent cache overflow",
            //     ],
            //     answer: "Give each byte a unique numeric address",
            // },
            // {
            //     id: 58,
            //     category: "System Memory",
            //     difficulty: "Easy",
            //     question: "Before installing RAM, what should you do first?",
            //     options: [
            //         "Check Task Manager",
            //         "Power off and ground yourself",
            //         "Disable BIOS",
            //         "Remove CPU",
            //     ],
            //     answer: "Power off and ground yourself",
            // },
            // {
            //     id: 59,
            //     category: "System Memory",
            //     difficulty: "Easy",
            //     question: "SO-DIMMs are typically used in which devices?",
            //     options: ["Desktops", "Laptops", "Servers", "Embedded systems"],
            //     answer: "Laptops",
            // },
            // {
            //     id: 60,
            //     category: "System Memory",
            //     difficulty: "Medium",
            //     question:
            //         "ECC memory is most likely found in what type of system?",
            //     options: [
            //         "Gaming PCs",
            //         "Budget laptops",
            //         "Enterprise servers",
            //         "Tablets",
            //     ],
            //     answer: "Enterprise servers",
            // },
        ],
    },
    { id: 2, subject: "Cloud", data: [] },
    { id: 3, subject: "Animals", data: [] },
];
