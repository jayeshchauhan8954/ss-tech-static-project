// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
//           <li className="mb-2">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
//               src/app/page.js
//             </code>
//             .
//           </li>
//           <li>Save and see your changes instantly.</li>
//         </ol>

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }



// "use client";

// import { useState } from "react";
// import {
//   AppBar,
//   Tabs,
//   Tab,
//   Typography,
//   Box,
//   Grid,
//   TextField,
//   Button,
//   InputAdornment,
// } from "@mui/material";

// export default function Home() {
//   const [activeTab, setActiveTab] = useState(0);

//   const handleTabChange = (event, newValue) => {
//     setActiveTab(newValue);
//   };

//   return (
//     <Box>
//       {/* Header */}
//       <AppBar position="static" sx={{ bgcolor: "#00b8d4", paddingX: 4 }}>
//         <Tabs
//           value={activeTab}
//           onChange={handleTabChange}
//           indicatorColor="secondary"
//           textColor="inherit"
//           sx={{
//             "& .MuiTabs-indicator": {
//               backgroundColor: "#fff",
//               height: "3px",
//             },
//             "& .MuiTab-root": {
//               textTransform: "none",
//               color: "#fff",
//               fontSize: "16px",
//               fontWeight: 500,
//               marginX: 1,
//             },
//             "& .MuiTab-root.Mui-selected": {
//               color: "#fff",
//               fontWeight: "bold",
//             },
//           }}
//         >
//           <Tab label="Home" />
//           <Tab label="Engines" />
//           <Tab label="Transmissions" />
//           <Tab label="About Us" />
//           <Tab label="Blogs" />
//           <Tab label="Financing" />
//           <Tab label="Contact" />
//         </Tabs>
//       </AppBar>

//       {/* Hero Section */}
//       <Box sx={{ textAlign: "center", mt: 4, px: 2 }}>
//         <Typography
//           variant="h3"
//           sx={{
//             fontWeight: "bold",
//             color: "#00b8d4",
//             fontFamily: "'Poppins', sans-serif",
//           }}
//         >
//           Finance Option Available
//         </Typography>
//       </Box>

//       {/* Main Content */}
//       <Grid container spacing={2} sx={{ px: 4, mt: 4 }}>
//         {/* Form Section */}
//         <Grid item xs={12} md={6}>
//           <Box
//             component="form"
//             sx={{
//               backgroundColor: "#f8f9fa",
//               padding: 4,
//               borderRadius: 2,
//               boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//             }}
//           >
//             <Grid container spacing={2}>
//               <Grid item xs={6}>
//                 <TextField
//                   label="Select Part"
//                   fullWidth
//                   select
//                   SelectProps={{ native: true }}
//                   InputLabelProps={{ shrink: true }}
//                 >
//                   <option value="">Part</option>
//                   <option value="engine">Engine</option>
//                   <option value="transmission">Transmission</option>
//                 </TextField>
//               </Grid>
//               <Grid item xs={6}>
//                 <TextField
//                   label="Select Year"
//                   fullWidth
//                   select
//                   SelectProps={{ native: true }}
//                   InputLabelProps={{ shrink: true }}
//                 >
//                   <option value="">Year</option>
//                   <option value="2024">2024</option>
//                   <option value="2023">2023</option>
//                 </TextField>
//               </Grid>
//               <Grid item xs={6}>
//                 <TextField
//                   label="Select Make"
//                   fullWidth
//                   select
//                   SelectProps={{ native: true }}
//                   InputLabelProps={{ shrink: true }}
//                 >
//                   <option value="">Make</option>
//                   <option value="honda">Honda</option>
//                   <option value="toyota">Toyota</option>
//                 </TextField>
//               </Grid>
//               <Grid item xs={6}>
//                 <TextField
//                   label="Select Model"
//                   fullWidth
//                   select
//                   SelectProps={{ native: true }}
//                   InputLabelProps={{ shrink: true }}
//                 >
//                   <option value="">Model</option>
//                   <option value="accord">Accord</option>
//                   <option value="camry">Camry</option>
//                 </TextField>
//               </Grid>
//               <Grid item xs={6}>
//                 <TextField label="Enter Name" fullWidth />
//               </Grid>
//               <Grid item xs={6}>
//                 <TextField
//                   label="Phone"
//                   fullWidth
//                   InputProps={{
//                     startAdornment: (
//                       <InputAdornment position="start">+1</InputAdornment>
//                     ),
//                   }}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField label="Email" type="email" fullWidth />
//               </Grid>
//               <Grid item xs={12}>
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   fullWidth
//                   sx={{ fontWeight: "bold", textTransform: "none" }}
//                 >
//                   Submit
//                 </Button>
//               </Grid>
//             </Grid>
//           </Box>
//         </Grid>

//         {/* Placeholder Image */}
//         <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
//           <Box
//             sx={{
//               width: "100%",
//               height: 300,
//               backgroundColor: "#ccc",
//               borderRadius: 2,
//             }}
//           >
//             <Typography variant="h6" sx={{ mt: 10 }}>
//               Car Image Placeholder
//             </Typography>
//           </Box>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }



"use client";

import { useState, useEffect } from "react";
import {
  AppBar,
  Tabs,
  Tab,
  Typography,
  Box,
  Grid,
  TextField,
  Button,
  InputAdornment,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";

// Custom MUI Theme
const theme = createTheme({
  palette: {
    primary: { main: "#00b8d4" },
    secondary: { main: "#ff4081" },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
});

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
    </div>
  )
}

export default Home
