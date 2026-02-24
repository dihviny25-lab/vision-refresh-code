import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Lideranca from "./pages/Lideranca";
import Musicas from "./pages/Musicas";
import Contribua from "./pages/Contribua";
import ConfissaoDeFe from "./pages/ConfissaoDeFe";
import Hubs from "./pages/Hubs";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/lideranca" element={<Lideranca />} />
          <Route path="/musicas" element={<Musicas />} />
          <Route path="/contribua" element={<Contribua />} />
          <Route path="/confissao-de-fe" element={<ConfissaoDeFe />} />
          <Route path="/hubs" element={<Hubs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
