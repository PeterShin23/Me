import { motion, AnimatePresence } from 'framer-motion';
import * as React from 'react';
import { InfoCardEnum } from '../types/enums';

import { Colors } from '../utils/colors';

type InfoCardProps = {
  title: string;
  childDiv: any;
};

export const InfoCard: React.FC<InfoCardProps> = (props) => {
  const { title, childDiv } = props;

  return (
    <AnimatePresence>
      <motion.div 
        className="rounded-xl max-w-lg hover:shadow-lg cursor-pointer select-none"
        style={{
          backgroundColor: Colors.TeaGreenLight,
          borderWidth: 3,
          borderColor: Colors.TeaGreenDark
        }}
        // motion props
        initial={{opacity: 0, scale: 0.5}}
        animate={{opacity: 1, scale: 1}}
        transition={{duration: 0.2, ease: "easeOut"}}
      >
        <div className="p-4">
          <div className="text-slate-200 text-4xl font-bold pb-2">{title}</div>
          <div className="px-2">{childDiv}</div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
};