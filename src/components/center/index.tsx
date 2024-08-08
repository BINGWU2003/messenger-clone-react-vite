import { CSSProperties } from 'react';
import styled from "styled-components"
import React from 'react';
interface CenterProps {
  list?: string[]
}
export const Center: React.FC = ({ list }: CenterProps) => {
  const contentStyle: CSSProperties = {
    padding: '10px',
    borderRight: '1px solid #ccc',
    flex: 1, height: '100%', boxSizing: 'border-box'
  }
  const Title = styled.div`
    
  `
  return (
    <div style={contentStyle}>
      Center
    </div>
  )
}