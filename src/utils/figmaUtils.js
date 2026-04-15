export function extractColors(document) {
  const colors = new Map();

  function traverse(node) {
    if (!node) return;

    if (node.type === 'RECTANGLE' || node.type === 'FRAME') {
      const fills = node.fills || [];
      fills.forEach((fill, index) => {
        if (fill.type === 'SOLID' && fill.color) {
          const key = `${node.name}_${index}`;
          colors.set(key, {
            name: node.name,
            color: fill.color,
            opacity: fill.opacity ?? 1,
          });
        }
      });
    }

    if (node.children) {
      node.children.forEach(traverse);
    }
  }

  traverse(document);
  return Array.from(colors.values());
}

export function extractTypography(document) {
  const styles = new Map();

  function traverse(node) {
    if (!node) return;

    if (node.type === 'TEXT' && node.style) {
      const key = node.name || `text_${styles.size}`;
      styles.set(key, {
        fontFamily: node.style.fontFamily,
        fontSize: node.style.fontSize,
        fontWeight: node.style.fontWeight,
        lineHeight: node.style.lineHeight,
        letterSpacing: node.style.letterSpacing,
      });
    }

    if (node.children) {
      node.children.forEach(traverse);
    }
  }

  traverse(document);
  return Array.from(styles.values());
}

export function flattenNodes(document, depth = 0) {
  const nodes = [];

  function traverse(node, level) {
    nodes.push({
      name: node.name,
      type: node.type,
      depth: level,
      id: node.id,
    });

    if (node.children) {
      node.children.forEach((child) => traverse(child, level + 1));
    }
  }

  traverse(document, depth);
  return nodes;
}

export function findNodesByType(document, targetType) {
  const results = [];

  function traverse(node) {
    if (!node) return;

    if (node.type === targetType) {
      results.push(node);
    }

    if (node.children) {
      node.children.forEach(traverse);
    }
  }

  traverse(document);
  return results;
}

export function colorToHex(color) {
  if (!color) return '#000000';
  const r = Math.round(color.r * 255);
  const g = Math.round(color.g * 255);
  const b = Math.round(color.b * 255);
  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}

export function colorToRgba(color, alpha = 1) {
  if (!color) return `rgba(0, 0, 0, ${alpha})`;
  const r = Math.round(color.r * 255);
  const g = Math.round(color.g * 255);
  const b = Math.round(color.b * 255);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}